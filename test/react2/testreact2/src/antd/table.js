const { Table } = require("antd")

export default function App() {
    const students = [{
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
    return (<div className="App">
        <Table size={"middle"} bordered={true} dataSource={students} columns={columns}/>
    </div>)
}