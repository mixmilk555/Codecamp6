import './App.css';
import { Row, Col, Form, Input, Button } from "antd";

function App() {
  const layout = {
    labelCol: {
      xs: 6, sm: 8, md: 10
      // span: 8,
    },
    wrapperCol: {
      xs: 18, sm: 16, md: 14
      // span: 16,
    },
  };
  const onFinish = (value) => {
    console.log(value);
  }
  return (
    <div className="App">
      <Row justify="center">
        <Col sx={24} sm={24} md={20} lg={16} xl={14} xxl={12}>
          <Form onFinish={onFinish} {...layout}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: "คุณต้องกรอกช่อง" },
                { max: 7, min: 3, message: "ชื่อต้องอยู่ระหว่าง 3 ถึง 7 นะจ๊ะ" }]}>
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              label="PhoneNumber"
              name="phoneNumber"
              rules={[{ len: 10, message: "เบอร์ของคุณไม่ถูกต้อง" }]}>
              <Input placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, type: "email", message: "รูปแบบ email ไม่ถูกต้อง" }]}>
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "ใส่รหัสผ่านด้วยเน้อออ" },
              { min: 12, max: 24, message: "รหัสผ่านได้จำนวน 12 ถึง 24 ตัว" }]}>
              <Input type="password" placeholder="Password" />
            </Form.Item>
            <Button htmlType="submit">Register</Button>
          </Form>
        </Col>
      </Row>

    </div >
  );
}

export default App;
 