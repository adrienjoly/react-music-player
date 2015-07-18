window.SOUNDCLOUD_CLIENT_ID = "11f9999111b5555c22227777c3333fed"; // TODO
window.DEEZER_APP_ID = 123456789; // TODO
window.DEEZER_CHANNEL_URL = "http://mysite.com/deezer-channel.html"; // TODO
window.JAMENDO_CLIENT_ID = "f9ff9f0f"; // TODO

(function(){
  var playerParams = {
    playerId: "genericplayer",
    origin: window.location.host || window.location.hostname,
    playerContainer: document.getElementById("container")
  };

  require('playemjs');

  window.makePlayem(null, null, function(){
    document.getElementById("container").innerHTML = 'playem is ready';
  });

})();

class Hello extends React.Component {
  constructor() {
    this.state = {
      opacity: 1.0
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }, 100);
  }
  render() {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
}

React.render(
  <Hello name="world"/>,
  document.getElementById('react-container')
);
