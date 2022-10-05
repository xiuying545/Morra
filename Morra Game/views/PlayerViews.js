import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.
exports.GetThumb = class extends React.Component {
  render() {
    const {parent, playable, thumb} = this.props;
    return (
      <div>
        {thumb ? 'It was a draw! Pick again.' : ''}
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
      </div>
    );
  }
}


exports.GetGuess = class extends React.Component {
  render() {
    const {parent, playable, guess} = this.props;
    return (
      <div>
        {guess ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('ZEROs')}
        >0</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('ONEs')}
        >1</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('TWOs')}
        >2</button>
            <button
          disabled={!playable}
          onClick={() => parent.playGuess('THREEs')}
        >3</button>
            <button
          disabled={!playable}
          onClick={() => parent.playGuess('FOURs')}
        >4</button>
          <button
          disabled={!playable}
          onClick={() => parent.playGuess('FIVEs')}
        >5</button>
            <button
          disabled={!playable}
          onClick={() => parent.playGuess('SIXs')}
        >6</button>
            <button
          disabled={!playable}
          onClick={() => parent.playGuess('SEVENs')}
        >7</button>
            <button
          disabled={!playable}
          onClick={() => parent.playGuess('EIGHTs')}
        >8</button>
            <button
          disabled={!playable}
          onClick={() => parent.playGuess('NINEs')}
        >9</button>
            <button
          disabled={!playable}
          onClick={() => parent.playGuess('TENs')}
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