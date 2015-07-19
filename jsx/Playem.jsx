module.exports = class Playem extends React.Component {
  constructor() {
    require('playemjs');
    this.state = {
      status: "loading"
    };
  }
  componentDidMount() {
    var playerParams = {
      playerId: "playemjs-player",
      origin: window.location.host || window.location.hostname,
      playerContainer: document.getElementById("playemjs-container")
    };

    window.SOUNDCLOUD_CLIENT_ID = this.props.scApiKey;
    window.DEEZER_APP_ID = this.props.dzApiKey;
    window.DEEZER_CHANNEL_URL = this.props.dzChannelUrl;
    window.JAMENDO_CLIENT_ID = this.props.jaApiKey;

    window.makePlayem(null, playerParams, (playem) => {
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
        <div id="playemjs-container"></div>
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
