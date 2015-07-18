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
    document.getElementById('container')
  );
}, 50);
