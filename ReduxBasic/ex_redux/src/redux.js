const redux = require('redux')  //--> นำเรียก redux เข้ามา
//1

const initialState = { //4 //อย่าลืม state เป็น Object
    counter: 0,
}


//Reducer//3
const reducer = (state = initialState, action) => { //ตั้งตั้ง initialState ก่อนเสมอ  
    // รับ parameter 2  ตัว state(ตัวเก่า),action(ใบคำสั่งว่าให้ reducerทำอะไร)

   if(action.type === "ADD_COUNTER"){ //เขียนเป็นเงื่อนไขว่า action ที่ส่งมาตรงกับอันไหนแล้วจะให้ทำอะไรกับ state 
        return {...state, counter : state.counter + action.value} // value มากับ action อยู่แล้ว
   } //return state ตัวใหม่ โดย เราจะ spread clone state ตัวเก่าก่อน แล้วเพิ่ม หรือ เปลี่ยน อะไรเข้าไป
    // ที่เรา clone เพราะ เราจะไม่ยุ่งกับ state ตัวเดิม เพราะ react มันอ้างอิงแบบ ref address ไม่ใช่แบบ value พอไปเปลี่ยนค่าตัวเดิมจะทำให้ error ได้

   if(action.type === "INCRESE_COUNTER"){
        return {...state, counter : state.counter +1}
   }
    return state   // หลังจากจัดการ state เรียบร้อย มันจะ return ไปให้ store 
                   // ถ้าไม่ตรงเงื่อนไข return state เก่ากลับไป
}


//Store //2
const store = redux.createStore(reducer);
// สร้าง store กลาง โดย redux
// มันจะรับ parameter ที่เป็น function จาก reducer() นั้นก็คือตัว reducer นั้นเอง นั้นคือ state ใหม่นั้นเอง 
console.log(store.getState()) //store.getState() ดูค่า state ใน store



//Subscription //7
// ตรวจเช็คทุกรอบที่มีการเปลี่ยนแปลง state ว่า store มีการอัพเดทไหม
store.subscribe(()=>{
     console.log("Subscribe :",store.getState())
})



//Action //5
//ใบคำสั่งว่าให้ทำอะไร
// action = เป็น Object ซึ่งมี key สำคัญคือ "type" ต้องใส่ทุกรอบ
action = {
    type: "INCRESE_COUNTER"
}


//Dispatch({action}) //6
//เป็น function เอาไว้ส่ง action ให้ reducer ว่าให้ทำอะไร
store.dispatch(action)
console.log(store.getState())
store.dispatch({
    type: "ADD_COUNTER",
    value: 5   // ข้อมูลที่ส่งเข้าไปเพิ่ม แล้วแต่เราว่าจะอะไรไปบ้าง
})
console.log(store.getState())

