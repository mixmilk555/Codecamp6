import React, { useState } from 'react';
import { Link } from 'react-router-dom';

        //React Hook
// export const Counters = () => {
//     const [count, setCount] = useState(0);
//     console.log(useState(0));
//     return (
//         <div style={{ textAlign:"center"}}>
//             <h3>{count}</h3>
//             <div>
//                 <button onClick={() => setCount(count + 1)}>plus</button>
//                 <button onClick={() => setCount(count - 1)}>minus</button>
//                 <button onClick={() => setCount(count * 0)}>reset</button>
//             </div>
//         </div>
//     )
// }



export default class Counter1 extends React.Component {
    state = {
        count :0
    }
    render() {
        const {count} = this.state;
        return (
            <div style={{ textAlign:"center"}}>
                <h3><Link to="/">Home</Link></h3>
            <h3>{count}</h3>
            <div>
                <button onClick={() => this.setState({count : count + 1})}>plus</button>
                <button onClick={() => this.setState({count : count - 1})}>minus</button>
                <button onClick={() => this.setState({count : 0})}>reset</button>
            </div>
        </div>
        )
    }
}
