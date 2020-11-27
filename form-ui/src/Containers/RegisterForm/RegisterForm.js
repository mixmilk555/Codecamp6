import React, { Component } from 'react'
import Input from '../Input/Input'
export class RegisterForm extends Component {
    state = {
        formData: {
            name: {
                value: "",
                validator: {
                    minLength: 3,
                    maxLength: 7,
                    required: true
                },
                error: { status: true, message: "", isTouched: false }
            },
            phoneNumber: {
                value: "",
                validator: { minLength: 10, maxLength: 10 },
                error: { status: true, message: "", isTouched: false }
            },
            email: {
                value: "",
                validator: { required: true },
                error: { status: true, message: "", isTouched: false }
            },
            password: {
                value: "",
                validator: { minLength: 6, maxLength: 24, required: true },
                error: { status: true, message: "", isTouched: false }
            },
        },
        isFormValid: false
    }
    checkValue = (value, rules) => {
        let isValid = true;
        let trimmedValue = value.trim();
        let message = "";

        if (rules.maxLength && trimmedValue.length > rules.maxLength) {
            isValid = false;
            message = `ช่องนี้ความยาวต้องไม่เกิน ${rules.maxLength} ตัว`
        }
        if (rules.minLength && trimmedValue.length < rules.minLength) {
            isValid = false;
            message = `ช่องนี้ความยาวต้องมากกว่า ${rules.minLength} ตัว`
        }

        if (rules.required && trimmedValue.length === 0) {
            isValid = false;
            message = "คุณต้องกรอกช่องนี้";
        }
        return { isValid, message };
    }

    //e: {target : {name:__ ,value:___}}
    onChangeInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const updateForm = this.state.formData;

        updateForm[fieldName].value = fieldValue;

        let { isValid, message } = this.checkValue(e.target.value, updateForm[fieldName].validator);

        updateForm[fieldName].error.status = !isValid;
        updateForm[fieldName].error.message = message;
        updateForm[fieldName].error.isTouched = true;

        let newIsFormValid = true;
        for (let fn in updateForm) {
            if (updateForm[fn].validator.required === true) {
                newIsFormValid = !updateForm[fn].error.status && newIsFormValid;
            }
        }
        this.setState({
            formData: updateForm,
            isFormValid: newIsFormValid,
        }) //ที่ e.target.name ครอบ [] เพราะเป็นการ destructuring ในกรณีนี้มี key name หลายตัวจึงใช้วิธีนี้ destructuring แบบ array จะจับคู่ตามลำดับข้อมูล ตัวแรกที่ event เก็บจะเป็น key name 
    }
    handleOnSubmitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    getClassCSS = () => {
        let cssClass = "Input InputElement";
        for (let fn in this.state.formData) {
            if (this.state.formData[fn].error.status) {
                cssClass += " Invalid";
            }
        }
        return cssClass;
    }
    render() {
        const { name, phoneNumber, email, password } = this.state.formData;
        const { isFormValid } = this.state;
        return (
            <div className="RegisterForm">
                <form onSubmit={this.onSubmitForm}>
                    <Input
                        onChangeInput={this.onChangeInput}
                        value={name.value}
                        name="name"
                        placeholder="Name"
                        error={name.error} />
                    <Input
                        onChangeInput={this.onChangeInput}
                        value={phoneNumber.value}
                        name="phoneNumber"
                        placeholder="PhoneNumber"
                        error={phoneNumber.error} />
                    <Input
                        onChangeInput={this.onChangeInput}
                        value={email.value}
                        name="email"
                        placeholder="Email"
                        error={email.error} />
                    <Input
                        onChangeInput={this.onChangeInput}
                        value={password.value}
                        name="password"
                        placeholder="Password"
                        type={"password"}
                        error={password.error} />

                    {/* <input onChange={this.onChangeInput} value={name.value} className={this.getClassCSS()} name="name" placeholder="Name" />
                    <input onChange={this.onChangeInput} value={phoneNumber.value} className={this.getClassCSS()} name="phoneNumber" placeholder="PhoneNumber" />
                    <input onChange={this.onChangeInput} value={email.value} className={this.getClassCSS()} name="email" placeholder="Email" />
        <input onChange={this.onChangeInput} type={"password"} value={password.value} className={this.getClassCSS()} name="password" placeholder="Password" />*/}

                    <button disabled={!isFormValid} htmlFor="submit" className="Button"> Submit register </button>

                </form>
            </div>
        )
    }
}

export default RegisterForm
