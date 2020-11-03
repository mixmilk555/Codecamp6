import React from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './Component/Article';


class App extends React.Component {
  constructor(props) {
    console.log("[App.js] constructor")
    super(props);
    this.state = {
      isShow: true,
      article: "Hello My JavaScript World"
    }
    // this.onChangeVisible = this.onChangeVisible.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps");
    return state;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate")
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App.js] getSnapshotBeforeUpdate")
    return { x: 0, y: 0 }
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("[App.js] componentDidUpdate", snapShot);
  }
  componentDidMount() {
    console.log("[App.js] componentDidMount")
  }
  onChangeVisible() {
    this.setState((previousState) => {
      return {
        isShow: !previousState.isShow
      }
    })
  }
  render() {
    console.log("[App.js] Render")
    return (
      <div className="App">
        <button onClick={this.onChangeVisible.bind(this)}>Show/Hide</button><br />
        <input value={this.state.article} onChange={(e) => this.setState({ article: e.target.value })} />
        <br /><br />{this.state.isShow ? <Article article={this.state.article} /> : null}
      </div>
    );
  }
}

export default App;
