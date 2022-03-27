import { Button, Card, Form, Input } from "antd";
import { useEffect, useState } from "react";
import css from "./index.module.css"


function Debaff() {
    const [debaff, setBaff] = useState(
        () => JSON.parse(localStorage.getItem('debaff')) || []
    );
        
    useEffect(() => {
        localStorage.setItem('debaff', JSON.stringify(debaff));
    }, [debaff]);


    const onFinishDebaff = (e) => {
        console.log(e);
        setBaff([...debaff, e]);
    };

    const deliteHendle = (item) => {
        console.log(debaff);
        const newDebaff = debaff.filter((debaff) => {
            return debaff.debaff !== item.debaff;
        });
        setBaff(newDebaff);
    }

    const gridStyle = {
        width: '95%',
        textAlign: 'start',
        margin: '2%',
        padding: "4%",
        fontSize: "60%",
        borderRadius: "5px" 
    };



    return (  
        <div className={css.container}>
            <Form
            layout={'inline'}
            name="basic"
            onFinish={onFinishDebaff}
            className={css.form}
            >
                <Form.Item name="debaff" >
                    <Input size="small" style={{margin: '1% 5%', width:'70%'}}/>
                </Form.Item>
                <Form.Item>
                    <Button className={css.button} htmlType="submit">
                        +
                    </Button>
                </Form.Item>
            </Form> 
            <Card>
            {debaff.map(item => (
            <Card.Grid hoverable={false} style={gridStyle} title="Card title" bordered={false}>
          {item.debaff}<button className={css.button} onClick={() => deliteHendle(item)}>x</button>
        </Card.Grid> ))}
        </Card>
        </div>  
    );
}

export default Debaff;