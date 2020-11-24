import React, { Component } from 'react'

export class RegisterForm extends Component {
    state = {
        name: "",
        phoneNumber: "",
        email: "",
        password: ""
    }
    handleOnChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value }) //ที่ e.target.name ครอบ [] เพราะเป็นการ destructuring ในกรณีนี้มี key name หลายตัวจึงใช้วิธีนี้ destructuring แบบ array จะจับคู่ตามลำดับข้อมูล ตัวแรกที่ event เก็บจะเป็น key name 
        console.log([e.target.name])
    }
    render() {
        const { name, phoneNumber, email, password } = this.state;
        return (
            <div className="RegisterForm">
                <input value={name} className="Input InputElement" name="name" placeholder="Name" />
                <input value={phoneNumber} className="Input InputElement" name="phoneNumber" placeholder="PhoneNumber" />
                <input value={email} className="Input InputElement" name="email" placeholder="Email" />
                <input value={password} className="Input InputElement" name="password" placeholder="Password" />
                <button  className="Button"> Submit register </button>
            </div>
        )
    }
}

export default RegisterForm
