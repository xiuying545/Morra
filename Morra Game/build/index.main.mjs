// Automatically generated with Reach 0.1.11 (98ccf409)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (98ccf409)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1],
      6: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      8: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1],
      10: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1],
      12: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v386 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v387 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v387, v386],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:87:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v387, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v391, v392], secs: v394, time: v393, didSend: v73, from: v390 } = txn1;
      
      sim_r.txns.push({
        amt: v391,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v403 = stdlib.safeAdd(v393, v392);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v391, v392], secs: v394, time: v393, didSend: v73, from: v390 } = txn1;
  ;
  const v403 = stdlib.safeAdd(v393, v392);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v403],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v390, v391, v392, v403],
      evt_cnt: 0,
      funcNum: 2,
      lct: v393,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v605, time: v604, didSend: v329, from: v603 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v390,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v605, time: v604, didSend: v329, from: v603 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:79:29:application',
      fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:95:63:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v409, time: v408, didSend: v82, from: v407 } = txn2;
    const v411 = stdlib.add(v391, v391);
    ;
    let v412 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v413 = v408;
    let v420 = v411;
    
    let txn3 = txn2;
    while (await (async () => {
      const v428 = stdlib.eq(v412, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v428;})()) {
      const v431 = stdlib.protect(ctc0, await interact.getThumb(), {
        at: './index.rsh:104:46:application',
        fs: ['at ./index.rsh:103:17:application call to [unknown function] (defined at: ./index.rsh:103:21:function exp)'],
        msg: 'getThumb',
        who: 'Alice'
        });
      const v432 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:105:46:application',
        fs: ['at ./index.rsh:103:17:application call to [unknown function] (defined at: ./index.rsh:103:21:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v433 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:107:58:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:103:17:application call to [unknown function] (defined at: ./index.rsh:103:21:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v434 = stdlib.digest([ctc0, ctc0], [v433, v431]);
      const v436 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:109:60:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:103:17:application call to [unknown function] (defined at: ./index.rsh:103:21:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v437 = stdlib.digest([ctc0, ctc0], [v436, v432]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v390, v391, v392, v407, v420, v434, v437],
        evt_cnt: 2,
        funcNum: 4,
        lct: v413,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:113:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v440, v441], secs: v443, time: v442, didSend: v114, from: v439 } = txn4;
          
          ;
          const v451 = stdlib.safeAdd(v442, v392);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v440, v441], secs: v443, time: v442, didSend: v114, from: v439 } = txn4;
      ;
      const v444 = stdlib.addressEq(v390, v439);
      stdlib.assert(v444, {
        at: './index.rsh:113:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v451 = stdlib.safeAdd(v442, v392);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc0],
        timeoutAt: ['time', v451],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v390, v391, v392, v407, v420, v440, v441, v451],
          evt_cnt: 0,
          funcNum: 6,
          lct: v442,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v571, time: v570, didSend: v282, from: v569 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v390,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v571, time: v570, didSend: v282, from: v569 } = txn6;
        ;
        const v572 = stdlib.addressEq(v390, v569);
        const v573 = stdlib.addressEq(v407, v569);
        const v574 = v572 ? true : v573;
        stdlib.assert(v574, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:131:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:79:29:application',
          fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:131:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v458], secs: v460, time: v459, didSend: v125, from: v457 } = txn5;
        ;
        const v461 = stdlib.addressEq(v407, v457);
        stdlib.assert(v461, {
          at: './index.rsh:130:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v468 = stdlib.safeAdd(v459, v392);
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 7,
          out_tys: [ctc0],
          timeoutAt: ['time', v468],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v390, v391, v392, v407, v420, v440, v441, v458, v468],
            evt_cnt: 0,
            funcNum: 8,
            lct: v459,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v553, time: v552, didSend: v248, from: v551 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v390,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v553, time: v552, didSend: v248, from: v551 } = txn7;
          ;
          const v554 = stdlib.addressEq(v390, v551);
          const v555 = stdlib.addressEq(v407, v551);
          const v556 = v554 ? true : v555;
          stdlib.assert(v556, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:134:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:79:29:application',
            fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:134:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v471], secs: v473, time: v472, didSend: v131, from: v470 } = txn6;
          ;
          const v474 = stdlib.addressEq(v407, v470);
          stdlib.assert(v474, {
            at: './index.rsh:133:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v481 = stdlib.safeAdd(v472, v392);
          const txn7 = await (ctc.sendrecv({
            args: [v390, v391, v392, v407, v420, v440, v441, v458, v471, v481, v433, v431],
            evt_cnt: 2,
            funcNum: 9,
            lct: v472,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:141:13:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v486, v487], secs: v489, time: v488, didSend: v141, from: v485 } = txn7;
              
              ;
              const v499 = stdlib.safeAdd(v488, v392);
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v481],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn7.didTimeout) {
            const txn8 = await (ctc.sendrecv({
              args: [v390, v391, v392, v407, v420, v440, v441, v458, v471, v481],
              evt_cnt: 0,
              funcNum: 10,
              lct: v472,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v535, time: v534, didSend: v214, from: v533 } = txn8;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v407,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v535, time: v534, didSend: v214, from: v533 } = txn8;
            ;
            const v536 = stdlib.addressEq(v390, v533);
            const v537 = stdlib.addressEq(v407, v533);
            const v538 = v536 ? true : v537;
            stdlib.assert(v538, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:142:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:79:29:application',
              fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:142:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v486, v487], secs: v489, time: v488, didSend: v141, from: v485 } = txn7;
            ;
            const v490 = stdlib.addressEq(v390, v485);
            stdlib.assert(v490, {
              at: './index.rsh:141:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v491 = stdlib.digest([ctc0, ctc0], [v486, v487]);
            const v492 = stdlib.digestEq(v440, v491);
            stdlib.assert(v492, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:143:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v499 = stdlib.safeAdd(v488, v392);
            const txn8 = await (ctc.sendrecv({
              args: [v390, v391, v392, v407, v420, v441, v458, v471, v487, v499, v436, v432],
              evt_cnt: 2,
              funcNum: 11,
              lct: v488,
              onlyIf: true,
              out_tys: [ctc0, ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:145:13:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v502, v503], secs: v505, time: v504, didSend: v151, from: v501 } = txn8;
                
                ;
                let v509;
                const v510 = stdlib.eq(v503, v471);
                if (v510) {
                  v509 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                else {
                  const v511 = stdlib.safeAdd(v487, v458);
                  const v512 = stdlib.eq(v511, v503);
                  if (v512) {
                    v509 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                    }
                  else {
                    const v514 = stdlib.eq(v511, v471);
                    if (v514) {
                      v509 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                      }
                    else {
                      v509 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    }
                  }
                const cv412 = v509;
                const cv413 = v504;
                const cv420 = v420;
                
                await (async () => {
                  const v412 = cv412;
                  const v413 = cv413;
                  const v420 = cv420;
                  
                  if (await (async () => {
                    const v428 = stdlib.eq(v412, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                    
                    return v428;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v587 = stdlib.eq(v412, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                    const v590 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:153:14:decimal', stdlib.UInt_max, '2'), v391);
                    const v592 = v587 ? v390 : v407;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v592,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v499],
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn8.didTimeout) {
              const txn9 = await (ctc.sendrecv({
                args: [v390, v391, v392, v407, v420, v441, v458, v471, v487, v499],
                evt_cnt: 0,
                funcNum: 12,
                lct: v488,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn9) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v517, time: v516, didSend: v180, from: v515 } = txn9;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v407,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v517, time: v516, didSend: v180, from: v515 } = txn9;
              ;
              const v518 = stdlib.addressEq(v390, v515);
              const v519 = stdlib.addressEq(v407, v515);
              const v520 = v518 ? true : v519;
              stdlib.assert(v520, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:146:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc2, await interact.informTimeout(), {
                at: './index.rsh:79:29:application',
                fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:146:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v502, v503], secs: v505, time: v504, didSend: v151, from: v501 } = txn8;
              ;
              const v506 = stdlib.addressEq(v390, v501);
              stdlib.assert(v506, {
                at: './index.rsh:145:13:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v507 = stdlib.digest([ctc0, ctc0], [v502, v503]);
              const v508 = stdlib.digestEq(v441, v507);
              stdlib.assert(v508, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:147:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Alice'
                });
              let v509;
              const v510 = stdlib.eq(v503, v471);
              if (v510) {
                v509 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v511 = stdlib.safeAdd(v487, v458);
                const v512 = stdlib.eq(v511, v503);
                if (v512) {
                  v509 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  const v514 = stdlib.eq(v511, v471);
                  if (v514) {
                    v509 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    v509 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  }
                }
              const cv412 = v509;
              const cv413 = v504;
              const cv420 = v420;
              
              v412 = cv412;
              v413 = cv413;
              v420 = cv420;
              
              txn3 = txn8;
              continue;}
            
            }
          
          }
        
        }
      
      
      
      }
    const v587 = stdlib.eq(v412, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v590 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:153:14:decimal', stdlib.UInt_max, '2'), v391);
    const v592 = v587 ? v390 : v407;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v412), {
      at: './index.rsh:156:26:application',
      fs: ['at ./index.rsh:155:9:application call to [unknown function] (defined at: ./index.rsh:155:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v391, v392], secs: v394, time: v393, didSend: v73, from: v390 } = txn1;
  ;
  const v403 = stdlib.safeAdd(v393, v392);
  stdlib.protect(ctc1, await interact.acceptWager(v391), {
    at: './index.rsh:93:25:application',
    fs: ['at ./index.rsh:92:11:application call to [unknown function] (defined at: ./index.rsh:92:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v390, v391, v392, v403],
    evt_cnt: 0,
    funcNum: 1,
    lct: v393,
    onlyIf: true,
    out_tys: [],
    pay: [v391, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v409, time: v408, didSend: v82, from: v407 } = txn2;
      
      const v411 = stdlib.add(v391, v391);
      sim_r.txns.push({
        amt: v391,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v412 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v413 = v408;
      const v420 = v411;
      
      if (await (async () => {
        const v428 = stdlib.eq(v412, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v428;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v587 = stdlib.eq(v412, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v590 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:153:14:decimal', stdlib.UInt_max, '2'), v391);
        const v592 = v587 ? v390 : v407;
        sim_r.txns.push({
          kind: 'from',
          to: v592,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v403],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v390, v391, v392, v403],
      evt_cnt: 0,
      funcNum: 2,
      lct: v393,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v605, time: v604, didSend: v329, from: v603 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v390,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v605, time: v604, didSend: v329, from: v603 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:79:29:application',
      fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:95:63:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v409, time: v408, didSend: v82, from: v407 } = txn2;
    const v411 = stdlib.add(v391, v391);
    ;
    let v412 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v413 = v408;
    let v420 = v411;
    
    let txn3 = txn2;
    while (await (async () => {
      const v428 = stdlib.eq(v412, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v428;})()) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v440, v441], secs: v443, time: v442, didSend: v114, from: v439 } = txn4;
      ;
      const v444 = stdlib.addressEq(v390, v439);
      stdlib.assert(v444, {
        at: './index.rsh:113:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v451 = stdlib.safeAdd(v442, v392);
      const v455 = stdlib.protect(ctc0, await interact.getThumb(), {
        at: './index.rsh:121:54:application',
        fs: ['at ./index.rsh:120:15:application call to [unknown function] (defined at: ./index.rsh:120:19:function exp)'],
        msg: 'getThumb',
        who: 'Bob'
        });
      const v456 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:122:54:application',
        fs: ['at ./index.rsh:120:15:application call to [unknown function] (defined at: ./index.rsh:120:19:function exp)'],
        msg: 'getGuess',
        who: 'Bob'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v390, v391, v392, v407, v420, v440, v441, v451, v455],
        evt_cnt: 1,
        funcNum: 5,
        lct: v442,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:130:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v458], secs: v460, time: v459, didSend: v125, from: v457 } = txn5;
          
          ;
          const v468 = stdlib.safeAdd(v459, v392);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v451],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v390, v391, v392, v407, v420, v440, v441, v451],
          evt_cnt: 0,
          funcNum: 6,
          lct: v442,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v571, time: v570, didSend: v282, from: v569 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v390,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v571, time: v570, didSend: v282, from: v569 } = txn6;
        ;
        const v572 = stdlib.addressEq(v390, v569);
        const v573 = stdlib.addressEq(v407, v569);
        const v574 = v572 ? true : v573;
        stdlib.assert(v574, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:131:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:79:29:application',
          fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:131:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v458], secs: v460, time: v459, didSend: v125, from: v457 } = txn5;
        ;
        const v461 = stdlib.addressEq(v407, v457);
        stdlib.assert(v461, {
          at: './index.rsh:130:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v468 = stdlib.safeAdd(v459, v392);
        const txn6 = await (ctc.sendrecv({
          args: [v390, v391, v392, v407, v420, v440, v441, v458, v468, v456],
          evt_cnt: 1,
          funcNum: 7,
          lct: v459,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:133:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v471], secs: v473, time: v472, didSend: v131, from: v470 } = txn6;
            
            ;
            const v481 = stdlib.safeAdd(v472, v392);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v468],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v390, v391, v392, v407, v420, v440, v441, v458, v468],
            evt_cnt: 0,
            funcNum: 8,
            lct: v459,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v553, time: v552, didSend: v248, from: v551 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v390,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v553, time: v552, didSend: v248, from: v551 } = txn7;
          ;
          const v554 = stdlib.addressEq(v390, v551);
          const v555 = stdlib.addressEq(v407, v551);
          const v556 = v554 ? true : v555;
          stdlib.assert(v556, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:134:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:79:29:application',
            fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:134:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v471], secs: v473, time: v472, didSend: v131, from: v470 } = txn6;
          ;
          const v474 = stdlib.addressEq(v407, v470);
          stdlib.assert(v474, {
            at: './index.rsh:133:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v481 = stdlib.safeAdd(v472, v392);
          const txn7 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 9,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v481],
            waitIfNotPresent: false
            }));
          if (txn7.didTimeout) {
            const txn8 = await (ctc.sendrecv({
              args: [v390, v391, v392, v407, v420, v440, v441, v458, v471, v481],
              evt_cnt: 0,
              funcNum: 10,
              lct: v472,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v535, time: v534, didSend: v214, from: v533 } = txn8;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v407,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v535, time: v534, didSend: v214, from: v533 } = txn8;
            ;
            const v536 = stdlib.addressEq(v390, v533);
            const v537 = stdlib.addressEq(v407, v533);
            const v538 = v536 ? true : v537;
            stdlib.assert(v538, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:142:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:79:29:application',
              fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:142:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v486, v487], secs: v489, time: v488, didSend: v141, from: v485 } = txn7;
            ;
            const v490 = stdlib.addressEq(v390, v485);
            stdlib.assert(v490, {
              at: './index.rsh:141:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v491 = stdlib.digest([ctc0, ctc0], [v486, v487]);
            const v492 = stdlib.digestEq(v440, v491);
            stdlib.assert(v492, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:143:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v499 = stdlib.safeAdd(v488, v392);
            const txn8 = await (ctc.recv({
              didSend: false,
              evt_cnt: 2,
              funcNum: 11,
              out_tys: [ctc0, ctc0],
              timeoutAt: ['time', v499],
              waitIfNotPresent: false
              }));
            if (txn8.didTimeout) {
              const txn9 = await (ctc.sendrecv({
                args: [v390, v391, v392, v407, v420, v441, v458, v471, v487, v499],
                evt_cnt: 0,
                funcNum: 12,
                lct: v488,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn9) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v517, time: v516, didSend: v180, from: v515 } = txn9;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v407,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v517, time: v516, didSend: v180, from: v515 } = txn9;
              ;
              const v518 = stdlib.addressEq(v390, v515);
              const v519 = stdlib.addressEq(v407, v515);
              const v520 = v518 ? true : v519;
              stdlib.assert(v520, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:146:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:79:29:application',
                fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:146:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v502, v503], secs: v505, time: v504, didSend: v151, from: v501 } = txn8;
              ;
              const v506 = stdlib.addressEq(v390, v501);
              stdlib.assert(v506, {
                at: './index.rsh:145:13:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v507 = stdlib.digest([ctc0, ctc0], [v502, v503]);
              const v508 = stdlib.digestEq(v441, v507);
              stdlib.assert(v508, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:147:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Bob'
                });
              let v509;
              const v510 = stdlib.eq(v503, v471);
              if (v510) {
                v509 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v511 = stdlib.safeAdd(v487, v458);
                const v512 = stdlib.eq(v511, v503);
                if (v512) {
                  v509 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  const v514 = stdlib.eq(v511, v471);
                  if (v514) {
                    v509 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    v509 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  }
                }
              const cv412 = v509;
              const cv413 = v504;
              const cv420 = v420;
              
              v412 = cv412;
              v413 = cv413;
              v420 = cv420;
              
              txn3 = txn8;
              continue;}
            
            }
          
          }
        
        }
      
      
      
      }
    const v587 = stdlib.eq(v412, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v590 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:153:14:decimal', stdlib.UInt_max, '2'), v391);
    const v592 = v587 ? v390 : v407;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v412), {
      at: './index.rsh:156:26:application',
      fs: ['at ./index.rsh:155:9:application call to [unknown function] (defined at: ./index.rsh:155:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAQAAFQCCAoDAoCmAEFBqABkAGoATAmAwEAAQEAIjUAMRhBBp0qZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQcMQAM+SSEHDEABbUmBCwxAARNJIQYMQABWIQYSRCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEyqvON7AyBjQDIQ1bD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCBbRIIQY0ARJENARJIhJMNAISEUQoZClkUEk1A0lXACA1/4GAAVs1/kk1BUkiWzX9JVs1/IAEJmR71jT9FlA0/BZQsDIGNAMhDVsMRDT/MQASRDQDV1ggNP0WNPwWUAESRDT8NP4SQQAGIzX7QgAtNAOBiAFbNAOBeFsISTX6NPwSQQAGIjX7QgASNPo0/hJBAAchCDX7QgADIzX7NP80AyEEWzQDIQVbNANXMCA0+zIGNAMkW0IEqEghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABNNEcyOwMgY0AyEOWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgSrSSUMQAEcSYEJDEAAw0ghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSlcAIDX/IQRbNf4hBVs1/VcwIDX8JFs1+1d4IDX6IQlbNfkhDFs1+Ek1BUkiWzX3JVs19oAEqdlNPTT3FlA09hZQsDIGNAMhDlsMRDT/MQASRDQDV1ggNPcWNPYWUAESRDIGNP0INfU0/zT+FlA0/RZQNPxQNPsWUDT6UDT5FlA0+BZQNPYWUDT1FlAoSwFXAH9nKUsBV38ZZ0ghBjUBMgY1AkID90glNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEF/zbLrAyBjQDIQxbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCA4lIJTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSlcAIDX/IQRbNf4hBVs1/VcwIDX8JFs1+1dYIDX6V3ggNfkhCVs1+Ek1BRc194AEcaixozT3FlCwMgY0AyEMWwxENPwxABJEMgY0/Qg19jT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUDT3FlA09hZQKEsBVwB/ZylLAVd/MWdIIQc1ATIGNQJCAv1JgQQMQAGPSSEKDEAA+UkhCwxAAFNIIQs0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gARhtKwMsDIGNAMhCVsPRDT/MQASNANXMCAxABIRRLEisgE0AyRbsggjshA0/7IHs0ICeUghCzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/IQRbNf4hBVs1/VcwIDX8JFs1+1dYIDX6V3ggNflJNQUXNfiABIGqms80+BZQsDIGNAMhCVsMRDT8MQASRDIGNP0INfc0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlA09xZQKEsBVwB/ZylLAVd/KWdIJTUBMgY1AkIB9kghCjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBFs1/iEFWzX9VzAgNfwkWzX7STUFSVcAIDX6VyAgNfmABGBdpCs0+lA0+VCwNP8xABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUChLAVcAf2cpSwFXfyFnSCELNQEyBjUCQgFnSSMMQACQSSEIDEAAQSEIEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ9bD0SxIrIBNAMhBFuyCCOyEDQDVwAgsgezQgD9SCM0ARJENARJIhJMNAISEUQoZEk1AyEEWzX/gASai5F0sDIGNAMhD1sMRDT/iAE7NANXACA0/zQDIQVbMQAjMgY0/0kIQgBfSIGgjQaIARsiNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwNP+IAOsyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAHI1/zX+Nf01/DX7Nfo1+TT9IxJBACQ0+TT6FlA0+xZQNPxQNP8WUChLAVcAWGdIIQo1ATIGNQJCADmxIrIBIQg0+guyCCOyEDT8NPk0/SISTbIHs0IAADEZIQoSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v391",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v392",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v391",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v392",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v502",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v503",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v440",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v441",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v458",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v471",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v486",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v487",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v502",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v503",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v440",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v441",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v458",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v471",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v486",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v487",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200251a3803806200251a8339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b61219d806200037d6000396000f3fe6080604052600436106100d55760003560e01c80637eea518c11610079578063c798003711610056578063c7980037146101bf578063e00acef1146101d2578063e533a29d146101e5578063ebdbfdcc146101f857005b80637eea518c146101745780638323075714610187578063ab53f2c61461019c57005b80632c10a159116100b25780632c10a15914610128578063552d7b8e1461013b57806366ad16d01461014e5780636cec5d461461016157005b806311faee8c146100de5780631e93b0f1146100f1578063273206b81461011557005b366100dc57005b005b6100dc6100ec366004611b88565b61020b565b3480156100fd57600080fd5b506003545b6040519081526020015b60405180910390f35b6100dc610123366004611bbd565b6103c2565b6100dc610136366004611b88565b610678565b6100dc610149366004611b88565b610807565b6100dc61015c366004611bbd565b610a97565b6100dc61016f366004611b88565b610d10565b6100dc610182366004611b88565b610f4c565b34801561019357600080fd5b50600154610102565b3480156101a857600080fd5b506101b16110af565b60405161010c929190611bd9565b6100dc6101cd366004611b88565b61114c565b6100dc6101e0366004611b88565b6112e3565b6100dc6101f3366004611b88565b61143e565b6100dc610206366004611bbd565b611599565b61021b600c60005414603b6117f9565b6102358135158061022e57506001548235145b603c6117f9565b60008080556002805461024790611c36565b80601f016020809104026020016040519081016040528092919081815260200182805461027390611c36565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b50505050508060200190518101906102d89190611d84565b90506102ed816101200151431015603d6117f9565b7f72a9411aeeab8125b28db8f535a4d5f35c25515d1a088a10d0ce323245387cbf338360405161031e929190611da1565b60405180910390a1610332341560396117f9565b8051610366906001600160a01b0316331461035c5760608201516001600160a01b0316331461035f565b60015b603a6117f9565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156103a7573d6000803e3d6000fd5b50600080805560018190556103be90600290611a44565b5050565b6103d2600a60005414602b6117f9565b6103ec813515806103e557506001548235145b602c6117f9565b6000808055600280546103fe90611c36565b80601f016020809104026020016040519081016040528092919081815260200182805461042a90611c36565b80156104775780601f1061044c57610100808354040283529160200191610477565b820191906000526020600020905b81548152906001019060200180831161045a57829003601f168201915b505050505080602001905181019061048f9190611d84565b90506104a76040518060200160405280600081525090565b6104b98261012001514310602d6117f9565b7f61a975c2eb129c07d71a871df28eb78724f84a0b02b4a03b148b42a7224a9a2833846040516104ea929190611dde565b60405180910390a16104fe341560286117f9565b8151610516906001600160a01b0316331460296117f9565b604080516105629161053c91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114602a6117f9565b61057043836040015161181f565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260c08086015160a085015260e08087015191850191909152610100808701519185019190915286830135908401528351610120840152600c60005543600155905161064d91839101611e8a565b60405160208183030381529060405260029080519060200190610671929190611a7e565b5050505050565b61068860016000541460096117f9565b6106a28135158061069b57506001548235145b600a6117f9565b6000808055600280546106b490611c36565b80601f01602080910402602001604051908101604052809291908181526020018280546106e090611c36565b801561072d5780601f106107025761010080835404028352916020019161072d565b820191906000526020600020905b81548152906001019060200180831161071057829003601f168201915b50505050508060200190518101906107459190611e99565b905061075881606001514310600b6117f9565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13383604051610789929190611da1565b60405180910390a16107a28160200151341460086117f9565b6107aa611b02565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160019052514392019190915251800160208201516040015261080281611872565b505050565b61081760066000541460166117f9565b6108318135158061082a57506001548235145b60176117f9565b60008080556002805461084390611c36565b80601f016020809104026020016040519081016040528092919081815260200182805461086f90611c36565b80156108bc5780601f10610891576101008083540402835291602001916108bc565b820191906000526020600020905b81548152906001019060200180831161089f57829003601f168201915b50505050508060200190518101906108d49190611f12565b90506108ec6040518060200160405280600081525090565b6108fd8260e00151431060186117f9565b7f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d3338460405161092e929190611fbe565b60405180910390a1610942341560146117f9565b606082015161095d906001600160a01b0316331460156117f9565b61096b43836040015161181f565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528351610100840152600860005543600155905161064d9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b610aa7600c6000541460366117f9565b610ac181351580610aba57506001548235145b60376117f9565b600080805560028054610ad390611c36565b80601f0160208091040260200160405190810160405280929190818152602001828054610aff90611c36565b8015610b4c5780601f10610b2157610100808354040283529160200191610b4c565b820191906000526020600020905b815481529060010190602001808311610b2f57829003601f168201915b5050505050806020019051810190610b649190611d84565b9050610b83604051806040016040528060008152602001600081525090565b610b95826101200151431060386117f9565b7fde56afa74c9f6c9211234ba8c87db17d1f2d7f456e99f217651173a9368d4d463384604051610bc6929190611dde565b60405180910390a1610bda341560336117f9565b8151610bf2906001600160a01b0316331460346117f9565b60408051610c3e91610c1891602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a001511460356117f9565b60e082015160408401351415610c575760018152610ca3565b610c6a8261010001518360c0015161181f565b6020820181905260408401351415610c855760008152610ca3565b8160e0015181602001511415610c9e5760028152610ca3565b600181525b610cab611b02565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283518184018051919091528051439201919091526080850151905190910152610d0a81611872565b50505050565b610d2060086000541460206117f9565b610d3a81351580610d3357506001548235145b60216117f9565b600080805560028054610d4c90611c36565b80601f0160208091040260200160405190810160405280929190818152602001828054610d7890611c36565b8015610dc55780601f10610d9a57610100808354040283529160200191610dc5565b820191906000526020600020905b815481529060010190602001808311610da857829003601f168201915b5050505050806020019051810190610ddd9190611fe5565b9050610df56040518060200160405280600081525090565b610e07826101000151431060226117f9565b7fcf1141db81cf673bada35f0f89f1438399a69251ff5f66f15c1433b39ac0ad743384604051610e38929190611fbe565b60405180910390a1610e4c3415601e6117f9565b6060820151610e67906001600160a01b03163314601f6117f9565b610e7543836040015161181f565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e08086015190840152858101356101008401528351610120840152600a60005543600155905161064d91839101611e8a565b610f5c600160005414600d6117f9565b610f7681351580610f6f57506001548235145b600e6117f9565b600080805560028054610f8890611c36565b80601f0160208091040260200160405190810160405280929190818152602001828054610fb490611c36565b80156110015780601f10610fd657610100808354040283529160200191611001565b820191906000526020600020905b815481529060010190602001808311610fe457829003601f168201915b50505050508060200190518101906110199190611e99565b905061102d8160600151431015600f6117f9565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161105e929190611da1565b60405180910390a16110723415600c6117f9565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156103a7573d6000803e3d6000fd5b6000606060005460028080546110c490611c36565b80601f01602080910402602001604051908101604052809291908181526020018280546110f090611c36565b801561113d5780601f106111125761010080835404028352916020019161113d565b820191906000526020600020905b81548152906001019060200180831161112057829003601f168201915b50505050509050915091509091565b61115c600660005414601b6117f9565b6111768135158061116f57506001548235145b601c6117f9565b60008080556002805461118890611c36565b80601f01602080910402602001604051908101604052809291908181526020018280546111b490611c36565b80156112015780601f106111d657610100808354040283529160200191611201565b820191906000526020600020905b8154815290600101906020018083116111e457829003601f168201915b50505050508060200190518101906112199190611f12565b905061122d8160e00151431015601d6117f9565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae338360405161125e929190611da1565b60405180910390a1611272341560196117f9565b80516112a6906001600160a01b0316331461129c5760608201516001600160a01b0316331461129f565b60015b601a6117f9565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156103a7573d6000803e3d6000fd5b6112f3600a6000541460306117f9565b61130d8135158061130657506001548235145b60316117f9565b60008080556002805461131f90611c36565b80601f016020809104026020016040519081016040528092919081815260200182805461134b90611c36565b80156113985780601f1061136d57610100808354040283529160200191611398565b820191906000526020600020905b81548152906001019060200180831161137b57829003601f168201915b50505050508060200190518101906113b09190611d84565b90506113c581610120015143101560326117f9565b7f3d5296ff959773a694d0854b4cbbb29a1b91dabf625a358e26d9f308a93a288a33836040516113f6929190611da1565b60405180910390a161140a3415602e6117f9565b8051610366906001600160a01b031633146114345760608201516001600160a01b03163314611437565b60015b602f6117f9565b61144e60086000541460256117f9565b6114688135158061146157506001548235145b60266117f9565b60008080556002805461147a90611c36565b80601f01602080910402602001604051908101604052809291908181526020018280546114a690611c36565b80156114f35780601f106114c8576101008083540402835291602001916114f3565b820191906000526020600020905b8154815290600101906020018083116114d657829003601f168201915b505050505080602001905181019061150b9190611fe5565b905061152081610100015143101560276117f9565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb607763383604051611551929190611da1565b60405180910390a1611565341560236117f9565b80516112a6906001600160a01b0316331461158f5760608201516001600160a01b03163314611592565b60015b60246117f9565b6115a960056000541460126117f9565b6115c3813515806115bc57506001548235145b60136117f9565b6000808055600280546115d590611c36565b80601f016020809104026020016040519081016040528092919081815260200182805461160190611c36565b801561164e5780601f106116235761010080835404028352916020019161164e565b820191906000526020600020905b81548152906001019060200180831161163157829003601f168201915b5050505050806020019051810190611666919061206e565b905061167e6040518060200160405280600081525090565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a33846040516116af929190611dde565b60405180910390a16116c3341560106117f9565b81516116db906001600160a01b0316331460116117f9565b6116e943836040015161181f565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e0840152600660005543600155905161064d9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816103be5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008261182c838261210e565b915081101561186c5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611816565b92915050565b6020810151516001141561196a576118c46040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b039081168083528351602090810151818501908152855160409081015181870190815287516060908101518716818901908152858a01518401516080808b019182526005600055436001558551978801989098529451938601939093529051908401525190931691810191909152905160a082015260c00160405160208183030381529060405260029080519060200190610802929190611a7e565b6020810151511561198057805160600151611984565b8051515b6001600160a01b03166108fc6119a360028460000151602001516119e5565b6040518115909202916000818181858888f193505050501580156119cb573d6000803e3d6000fd5b50600080805560018190556119e290600290611a44565b50565b6000811580611a09575082826119fb8183612126565b9250611a079083612145565b145b61186c5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401611816565b508054611a5090611c36565b6000825580601f10611a60575050565b601f0160209004906000526020600020908101906119e29190611b5b565b828054611a8a90611c36565b90600052602060002090601f016020900481019282611aac5760008555611af2565b82601f10611ac557805160ff1916838001178555611af2565b82800160010185558215611af2579182015b82811115611af2578251825591602001919060010190611ad7565b50611afe929150611b5b565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001611b5660405180606001604052806000815260200160008152602001600081525090565b905290565b5b80821115611afe5760008155600101611b5c565b600060408284031215611b8257600080fd5b50919050565b600060408284031215611b9a57600080fd5b611ba48383611b70565b9392505050565b600060608284031215611b8257600080fd5b600060608284031215611bcf57600080fd5b611ba48383611bab565b82815260006020604081840152835180604085015260005b81811015611c0d57858101830151858201606001528201611bf1565b81811115611c1f576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680611c4a57607f821691505b60208210811415611b8257634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff81118282101715611c9d57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff81118282101715611c9d57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114611cec57600080fd5b919050565b60006101408284031215611d0457600080fd5b611d0c611c6b565b9050611d1782611cd5565b81526020820151602082015260408201516040820152611d3960608301611cd5565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525092915050565b60006101408284031215611d9757600080fd5b611ba48383611cf1565b6001600160a01b038316815281356020808301919091526060820190830135801515808214611dcf57600080fd5b80604085015250509392505050565b6001600160a01b038316815260808101611ba460208301848035825260208082013590830152604090810135910152565b80516001600160a01b0316825260208101516020830152604081015160408301526060810151611e4a60608401826001600160a01b03169052565b506080818101519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012090810151910152565b610140810161186c8284611e0f565b600060808284031215611eab57600080fd5b6040516080810181811067ffffffffffffffff82111715611edc57634e487b7160e01b600052604160045260246000fd5b604052611ee883611cd5565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6000610100808385031215611f2657600080fd5b6040519081019067ffffffffffffffff82118183101715611f5757634e487b7160e01b600052604160045260246000fd5b81604052611f6484611cd5565b81526020840151602082015260408401516040820152611f8660608501611cd5565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b038316815260608101611ba4602083018480358252602090810135910152565b60006101208284031215611ff857600080fd5b612000611ca3565b61200983611cd5565b8152602083015160208201526040830151604082015261202b60608401611cd5565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600060a0828403121561208057600080fd5b60405160a0810181811067ffffffffffffffff821117156120b157634e487b7160e01b600052604160045260246000fd5b6040526120bd83611cd5565b815260208301516020820152604083015160408201526120df60608401611cd5565b6060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612121576121216120f8565b500190565b6000816000190483118215151615612140576121406120f8565b500290565b60008261216257634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122012dc023f9727e5b9d30087216977050e948b05516d4385d8815ff88882655d6764736f6c634300080c0033`,
  BytecodeLen: 9498,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:89:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:95:63:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:154:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:102:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:114:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:131:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:132:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:134:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:135:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:142:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:144:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:146:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
