import { Button, Form, Input, List } from "antd";
import { useEffect, useState } from "react";
import css from "./index.module.css"


function Inventar() {

    
    const [tasks, setTasks] = useState(
        () => JSON.parse(localStorage.getItem('tasks')) || []
    );
        
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


    const onFinish = (e) => {
        setTasks([...tasks, e]);
    };

    const deliteHendle = (item) => {
        const newTasks = tasks.filter((task) => {
            return task.name !== item.name;
        });
        setTasks(newTasks);
    }



    return (  
        <div className={css.container}>
            <div className={css.tittle}>
                Инвентарь
            </div>
            <Form
            layout={'inline'}
            name="basic"
            onFinish={onFinish}
            >
                <Form.Item name="name" >
                    <Input size="small" style={{margin: '5%'}}/>
                </Form.Item>
                <Form.Item>
                    <Button shape="circle" style={{margin: '35%', display:'flex', alignItems:'center', justifyContent:'center'}} size="small" htmlType="submit">
                        +
                    </Button>
                </Form.Item>
            </Form> 
            <List
            size="small"
            itemLayout="horizontal"
            dataSource={tasks}
            renderItem={(item) => ( 
                <List.Item>
                     {item.name} <button className={css.button} onClick={() => deliteHendle(item)}>x</button>
                </List.Item> )}
  />   
        </div>  
    );
}

export default Inventar;