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

class ExampleApplication extends React.Component {
  render() {
    var elapsed = Math.round(this.props.elapsed  / 100);
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
    var message =
      `React has been successfully running for ${seconds} seconds.`;

    return <p>{message}</p>;
  }
}
var start = new Date().getTime();
setInterval(() => {
  React.render(
    <ExampleApplication elapsed={new Date().getTime() - start} />,
    document.getElementById('react-container')
  );
}, 50);
