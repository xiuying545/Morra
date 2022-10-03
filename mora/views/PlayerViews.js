import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetHand = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    return (
      <div>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playGame('ZERO')}
        >0</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGame('ONE')}
        >1</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGame('TWO')}
        >2</button>
            <button
          disabled={!playable}
          onClick={() => parent.playGame('THREE')}
        >3</button>
            <button
          disabled={!playable}
          onClick={() => parent.playGame('FOUR')}
        >4</button>
          <button
          disabled={!playable}
          onClick={() => parent.playGame('FIVE')}
        >5</button>
            <button
          disabled={!playable}
          onClick={() => parent.playGame('SIX')}
        >6</button>
            <button
          disabled={!playable}
          onClick={() => parent.playGame('SEVEN')}
        >7</button>
            <button
          disabled={!playable}
          onClick={() => parent.playGame('EIGHT')}
        >8</button>
            <button
          disabled={!playable}
          onClick={() => parent.playGame('NINE')}
        >9</button>
            <button
          disabled={!playable}
          onClick={() => parent.playGame('TEN')}
        >10</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;