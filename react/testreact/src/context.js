import React,{createContext} from 'react'

const Context = createContext(null);
// const Context = React.createContext(null);  // ทำได้ 2แบบ
//อย่าลืม export ไปใช้ใน app.js ด้วย
export default Context;
