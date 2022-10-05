'reach 0.1';

const [ isThumb, ZERO, ONE, TWO, THREE, FOUR, FIVE ] = makeEnum(6);
const [ isGuess, ZEROs, ONEs, TWOs, THREEs, FOURs, FIVEs, SIXs, SEVENs, EIGHTs, NINEs, TENs ] = makeEnum(11);
const [ isOutcome, Alice_WINS, TIE, Bob_WINS ] = makeEnum(3);

// game logic
const winner = (thumbA, thumbB, guessA, guessB) => { 
  if ( guessA == guessB ) 
   {
    const myoutcome = TIE; //tie
    return myoutcome;
} else {
  if ( ((thumbA + thumbB) == guessA ) ) {
    const myoutcome = Alice_WINS;
    return myoutcome;// player A wins
  } 
    else {
      if (  ((thumbA + thumbB) == guessB)) {
        const myoutcome = Bob_WINS;
        return myoutcome;// player B wins
    } 
      else {
        const myoutcome = TIE; // tie
        return myoutcome;
      }
    
    }
  }
};


  
assert(winner(ONE,TWO,THREEs,FOURs) == Alice_WINS)
assert(winner(ONE,TWO,FOURs,THREEs)== Bob_WINS)
assert(winner(ZERO,ONE,ZEROs,TWOs)== TIE)
assert(winner(ONE,ONE,ONEs,ONEs)== TIE)

// assets for all combinations
forall(UInt, thumbA =>
  forall(UInt, thumbB =>
    forall(UInt, guessA =>
      forall(UInt, guessB =>
    assert(isOutcome(winner(thumbA, thumbB, guessA, guessB)))))));

//  asserts for a draw - each guesses the same
forall(UInt, (thumbA) =>
  forall(UInt, (thumbB) =>       
    forall(UInt, (guess) =>
      assert(winner(thumbA, thumbB, guess, guess) == TIE))));    



// added a timeout function
const Player ={
        ...hasRandom,
        getThumb: Fun([], UInt),
        getGuess: Fun([], UInt),
        seeOutcome: Fun([UInt], Null) ,
        informTimeout: Fun([], Null)
       };
// added a wager function for Alice       
export const main = Reach.App(() => {

  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt, 
    deadline: UInt, 
  });
  const Bob   = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });

init()

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  }

  Alice.only(() => {
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline)
  });
  Alice.publish(wager, deadline)
    .pay(wager);
  commit();


  Bob.only(() => {
    interact.acceptWager(wager);
  });
  Bob.pay(wager).timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout))



    var outcome = TIE;
    invariant( balance() == 2 * wager && isOutcome(outcome) );
    while ( outcome == TIE ) {
      commit();
      Alice.only(() => {
        const _thumbAlice = interact.getThumb();
        const _guessAlice = interact.getGuess();

        const [_commitAlice, _saltAlice] = makeCommitment(interact, _thumbAlice);
        const commitAlice = declassify(_commitAlice);
        const [_commit2Alice, _salt2Alice] = makeCommitment(interact, _guessAlice);
        const commit2Alice = declassify(_commit2Alice);
      });

      Alice.publish(commitAlice,commit2Alice)
      commit();


      unknowable(Bob, Alice(_thumbAlice, _saltAlice));
      unknowable(Bob, Alice(_guessAlice, _salt2Alice));

      Bob.only(() => {
        const thumbBob = declassify(interact.getThumb()); 
        const guessBob = declassify(interact.getGuess()); 
      });


 



      Bob.publish(thumbBob)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
      commit();
      Bob.publish(guessBob)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
      commit();

      Alice.only(() => {
        const [saltAlice, thumbAlice] = declassify([_saltAlice, _thumbAlice]); 
        const [salt2Alice, guessAlice] = declassify([_salt2Alice, _guessAlice]); 
      });
      Alice.publish(saltAlice, thumbAlice)
        .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
      checkCommitment(commitAlice, saltAlice, thumbAlice);
      commit();
      Alice.publish(salt2Alice, guessAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
      checkCommitment(commit2Alice, salt2Alice, guessAlice);

      outcome = winner(thumbAlice, thumbBob,guessAlice,guessBob);
      continue;
    }
    assert(outcome == Alice_WINS || outcome == Bob_WINS);
    transfer(2 * wager).to(outcome == Alice_WINS ? Alice : Bob);
    commit();
    each([Alice, Bob], () => {
      interact.seeOutcome(outcome);
    });


});











    