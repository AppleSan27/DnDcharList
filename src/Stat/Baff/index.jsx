import { Card, Form, Input } from "antd";
import { useEffect, useState } from "react";
import css from "./index.module.css"

function Baff() {
    const [baff, setBaff] = useState(
        () => JSON.parse(localStorage.getItem('baff')) || []
    );
        
    useEffect(() => {
        localStorage.setItem('baff', JSON.stringify(baff));
    }, [baff]);


    const onFinishBaff = (e) => {
        console.log(e);
        setBaff([...baff, e]);
    };

    const deliteHendle = (item) => {
        const newBaff = baff.filter((baff) => {
            return baff.baff !== item.baff;
        });
        setBaff(newBaff);
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
            onFinish={onFinishBaff}
            className={css.form}
            >
                <Form.Item name="baff" >
                    <Input size="small" style={{margin: '1% 5%', width:'70%'}}/>
                   </Form.Item> 
                   <Form.Item>
                    <button  className={css.button} type="submit">
                        +
                    </button>
                </Form.Item>
            </Form> 
            <Card>
            {baff.map(item => (
            <Card.Grid hoverable={false} style={gridStyle} title="Card title" bordered={false}>
          {item.baff}<button className={css.button} onClick={() => deliteHendle(item)}>x</button>
        </Card.Grid> ))}
        </Card>
        </div>  
    );
}

export default Baff;