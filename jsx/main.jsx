var Playem = require("./Playem.jsx");
var tracks = require("../tracks.json");

React.render(
  <Playem
    name="myplayer"
    tracks={tracks}
    sc_api_key="11f9999111b5555c22227777c3333fed" // TODO
  />,
  document.getElementById('react-container')
);
