var Playem = require("react-playemjs");
var tracks = require("../tracks.json");

React.render(
  <div>
  <Playem
    name="myplayer"
    tracks={tracks}
    scApiKey="11f9999111b5555c22227777c3333fed" // TODO
    dzApiKey="123456789" // TODO
    dzChannelUrl="http://mysite.com/deezer-channel.html" // TODO
    jaApiKey="f9ff9f0f" // TODO
  />,
  <Playem
    name="myplayer2"
    tracks={tracks}
    scApiKey="11f9999111b5555c22227777c3333fed" // TODO
    dzApiKey="123456789" // TODO
    dzChannelUrl="http://mysite.com/deezer-channel.html" // TODO
    jaApiKey="f9ff9f0f" // TODO
  />
  </div>,
  document.getElementById('react-container')
);
