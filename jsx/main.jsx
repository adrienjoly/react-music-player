window.SOUNDCLOUD_CLIENT_ID = "11f9999111b5555c22227777c3333fed"; // TODO
window.DEEZER_APP_ID = 123456789; // TODO
window.DEEZER_CHANNEL_URL = "http://mysite.com/deezer-channel.html"; // TODO
window.JAMENDO_CLIENT_ID = "f9ff9f0f"; // TODO

class Playem extends React.Component {
  constructor() {
    require('playemjs');
    this.state = {
      secs: 0,
      status: "loading"
    };
  }
  componentDidMount() {
    setInterval(()=>{
      this.setState({
        secs: this.state.secs + 1
      });
    }, 1000)
    var playerParams = {
      playerId: "genericplayer",
      origin: window.location.host || window.location.hostname,
      playerContainer: document.getElementById("container")
    };
    window.SOUNDCLOUD_CLIENT_ID = this.props.sc_api_key || "11f9999111b5555c22227777c3333fed"; // TODO
    window.DEEZER_APP_ID = 123456789; // TODO
    window.DEEZER_CHANNEL_URL = "http://mysite.com/deezer-channel.html"; // TODO
    window.JAMENDO_CLIENT_ID = "f9ff9f0f"; // TODO
    window.makePlayem(null, playerParams, () => {
      this.setState({status: "ready"});
    });
  }
  render() {
    return (
      <div>
        <p>Playem component "{this.props.name}" has been running for {this.state.secs} seconds.</p>
        <p>Current status: {this.state.status}</p>
        <div id="container"></div>
      </div>
    );
  }
}

React.render(
  <Playem
    name="myplayer"
    sc_api_key="11f9999111b5555c22227777c3333fed" // TODO
  />,
  document.getElementById('react-container')
);
