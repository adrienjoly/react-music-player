var makePlayem = require('playemjs').makePlayem;

var lastInstance = -1;

module.exports = class Playem extends React.Component {
  constructor() {
    this.state = {
      instance: ++lastInstance,
      status: "loading"
    };
  }
  componentDidMount() {
    var playerParams = {
      playerId: "playemjs-player-" + this.state.instance,
      origin: window.location.host || window.location.hostname,
      playerContainer: React.findDOMNode(this.refs.playemContainer)
    };

    window.SOUNDCLOUD_CLIENT_ID = this.props.scApiKey;
    window.DEEZER_APP_ID = this.props.dzApiKey;
    window.DEEZER_CHANNEL_URL = this.props.dzChannelUrl;
    window.JAMENDO_CLIENT_ID = this.props.jaApiKey;

    makePlayem(null, playerParams, (playem) => {
      this.setState({status: "ready"});
      playem.on("onTrackChange", (track) => {
        this.setState({status: "Loading " + track.playerName + " track, id: " + track.trackId + "..."});
      });
      playem.on("onTrackInfo", (track) => {
        this.setState({status: "Playing " + track.playerName + " track, id: " + track.trackId});
      });
      this.props.tracks.map((track) => {
        playem.addTrackByUrl(track.eId);
      });
      playem.play();
    });
  }
  render() {
    return (
      <div>
        <p>Playem component "{this.props.name}": {this.state.status}</p>
        <div ref="playemContainer"></div>
        <p>Playlist:</p>
        <ol>
        {
          this.props.tracks.map((track) => {
            return <li>{track.name}</li>
          })
        }
        </ol>
      </div>
    );
  }
}
