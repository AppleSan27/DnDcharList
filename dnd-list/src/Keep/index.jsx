import { Input } from "antd";
import { useEffect, useState } from "react";
import css from "./index.module.css"


function Keep() {

    const [note, setNote] = useState(
        () => JSON.parse(localStorage.getItem('note')) || ''
    );
        
    useEffect(() => {
        localStorage.setItem('note', JSON.stringify(note));
    }, [note]);
    function addNotr(e){
        setNote(e.target.value)

    }
    return (   <div className={css.container}>
             <div className={css.tittle}>
                Заметки
            </div>
            <Input.TextArea defaultValue={note} rows={4} onChange={addNotr}/>
            
        </div>  );
}

export default Keep;