import './App.css';
import { connect } from 'react-redux';
import { Component } from 'react';

class App extends Component { //เปลี่ยน app เป็น class เพราะ connect() มันใช้รับค่า state ต้องใช้แบบ class
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    }
  }
  addHistory = (e) => {
    e.preventDefault()
    // this.props.addHistory({ type: "ADD_HISTORY", name: this.state.name, email: this.state.email })
    // this.setState({ name: '', email: '' })

    this.props.addHistory({ type: "ADD_HISTORY", name: this.props.state.textName, email: this.props.state.textEmail })
    //ที่ใช้ props เพราะเราใช้ state จากส่วน store กลางที่ส่งมาให้
    //มัน return ออกมาจาก mapStateToProps() รับ state จาก store กลางมา ออกมาเป็น props ต้องใช้ props ด้วย
  }
  render() {
    return (
      <div className="App" >
        <header className="App-header">

          {this.props.data}

          <div>
            <button onClick={() => this.props.plus({ type: "INCREASE" })}>+</button>
            <button onClick={() => this.props.minus()}>-</button>
            <button onClick={this.props.reset}>reset</button>
            <button onClick={() => this.props.addNum({ type: "ADD_NUM", num: this.props.data })}>add Number</button>
            <button onClick={this.props.addPerson}>add Person</button>
          </div>
          <ul>

            {this.props.state.arr.map((item, index) => <li key={index}>{item}</li>)}
            {this.props.state.arrObj.map((obj, index) =>
              (obj.name ? obj.email ? <li key={index}>Name: {obj.name} Email: {obj.email}</li> : <li key={index}>Name: {obj.name} Email : No email</li> : null))}

          </ul>
          <form onSubmit={this.addHistory}>

            {/* <input type="text" name="name" value={this.state.name} placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}></input>
            <input type="text" name="email" value={this.state.email} placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })} ></input><br /> */}

            <input type="text" name="textName" value={this.props.state.textName} placeholder="Name"
              onChange={(e) => this.props.textName({ type: "TEXT_NAME", textName: e.target.value })}></input>

            <input type="text" name="textEmail" value={this.props.state.textEmail} placeholder="Email"
              onChange={(e) => this.props.textEmail({ type: "TEXT_EMAIL", textEmail: e.target.value })}></input>
            <button type='submit'>Submit</button>
          </form>

        </header>
      </div >
    );
  }
}   // การเรียกใช้ state , method ใน class component ต้องมี this เสมอ

//store = {count:0}
const mapStateToProps = store => {  // mapStateToProps รับค่า state จาก store(parent) กลางมาให้เรา
  return {        // return state ออกมามัน state เป็น Object เสมอ
    data: store.count,   //data จะเป็นตัวที่เรากำหนดขึ้น เพื่อเก็บ state ซึ่ง state ตัวนี้เรารับมาจาก store กลางใน      reducer.js นั้นเอง ซึ่งส่งมาโดย Provider ในรูปแบบ props ให้เรา //store = {count:0}
    state: store
  }
} //  return ออกมาเป็น props ให้เราใช้  this.props.data

const mapDispatchToProps = dispatch => { // ให้ dispatch ส่ง action ไปที่ reducer.js
  return {
    plus(action) { return dispatch(action) },   //action เรากำหนดใน props แล้วข้างบนว่า onClick ให้ส่ง action
    minus: () => dispatch({ type: "DECREASE" }),       //ซึ่งมันจะส่งมาที่ dispatch ที่นี้แล้วไป reducer.js
    reset: () => dispatch({ type: "RESET" }),
    // addNum: () => dispatch({ type: "ADD_NUM", num: this.props.data }), เวลาจะส่ง action แล้วมีตัวเสริมจะส่งในนี้ไม่ได้ในกรณี props เพราะมัน ไม่รู้จัก props ต้องไปส่งใน onClick เอา
    addNum: (action) => dispatch(action),
    addPerson: () => dispatch({ type: "ADD_PERSON" }),
    addHistory: (action) => dispatch(action),
    textName: (action) => dispatch(action),
    textEmail: (action) => dispatch(action)

  }
} // return ออกมาเป็น props ให้เราใช้ this.props.plus..

export default connect(mapStateToProps, mapDispatchToProps)(App);
// connect() มันจะทำการเชื่อม store(parent) ที่ส่งมาให้กับ  App(child)
// ใน connect() รับ parameter 2 ตัว แล้วมันเป็น state ดังนั้นต้องเปลี่ยน App เป็น class component
