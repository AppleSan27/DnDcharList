import { Card, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import css from "./index.module.css"


function Skill() {
    
    const gridStyle = {
        width: '31%',
        textAlign: 'start',
        margin: '2%',
        padding: "4%",
        fontSize: "60%",
        borderRadius: "5px"
        
    };
const [input, setInput] = useState()
const [spels, setSpels] = useState(
    () => JSON.parse(localStorage.getItem('spels')) || [] );

const [isModalVisible, setIsModalVisible] = useState(false);

useEffect(() => {
    localStorage.setItem('spels', JSON.stringify(spels));
}, [spels]);


 const hendleAdd = (e) =>{
    setInput(e.target.value)
 }

const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    if(input.length>3) setSpels([...spels, {title:input}])
    setInput('')
    
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setInput('')

  };



    return ( <>  <div className={css.container}>
        <div className={css.tittle}>
            Способности
        </div>
        <div className={css.list}>
        <Card>
            {spels.map(item => (
            <Card.Grid hoverable={false} style={gridStyle} title="Card title" bordered={false}>
          {item.title}
        </Card.Grid>))}
    
        <Card.Grid hoverable={false} style={gridStyle} title="Card title" bordered={false}>
          <button className={css.button} onClick={showModal}>+</button>
        </Card.Grid>
        </Card>
        </div>
        </div> 
        <Modal title="Вжух! Ты колдунишка" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Input value={input} onChange={hendleAdd} ></Input>

      </Modal>
        </> );
}

export default Skill;