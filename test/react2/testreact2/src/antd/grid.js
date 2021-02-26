import { Row, Col } from 'antd'
const { Table } = require("antd")


export default function App1() {
    const students = [{
        "first_name": "Nona",
        "last_name": "St.Hill",
        "email": "nsthill@mail.com",
        "gender": "Female",
        "university": "Istanbul Arel University"
    }, {
        "first_name": "Nona",
        "last_name": "St.Hill",
        "email": "nsthill@mail.com",
        "gender": "Female",
        "university": "Istanbul Arel University"
    }, {
        "first_name": "Nona",
        "last_name": "St.Hill",
        "email": "nsthill@mail.com",
        "gender": "Female",
        "university": "Istanbul Arel University"
    }, {
        "first_name": "Nona",
        "last_name": "St.Hill",
        "email": "nsthill@mail.com",
        "gender": "Female",
        "university": "Istanbul Arel University"
    }]
    const columns = [
        {
            title: "Email",
            dataIndex: "email"
        },
        {
            title: "เพศ",
            dataIndex: "gender"
        }, {
            title: "ชื่อจริง",
            dataIndex: "first_name"
        }, {
            title: "นามสกุล",
            dataIndex: "last_name"
        }, {
            title: "มหาวิทยาลัย",
            dataIndex: "university"
        }
    ]
    return (<div >
        <Row justify="center">
            <Col sx={24} sm={24} md={20} lg={16} xl={14} xxl={12}>
                <Table size={"middle"} bordered={true} dataSource={students} columns={columns} />
            </Col>
        </Row></div>)
}