import { Avatar, Input } from "antd";
import { useState } from "react";
import css from "./index.module.css"

function Profile() {
    console.log(localStorage);
    const [characteristics, setCharact] = useState({'Имя': localStorage['Имя'] || '', 'здоровье': localStorage['здоровье'] || 0,'подозрительность': localStorage['подозрительность'] || 0, 'сила': localStorage['сила'] || 0,'ловкость': localStorage['ловкость'] || 0,'харизма': localStorage['харизма'] || 0,'интеллект':localStorage['интеллект'] || 0})
    function onChange (e) {
        setCharact(prev => ({...prev, [e.target.name]: e.target.value}))
        localStorage[e.target.name] = e.target.value
    }
    

    return ( 
        <div className={css.container}>
            <div className={css.profile}>
                <div className={css.avatar}>
                    <div>
                    <Avatar size={100}/>
                    </div>
                    <div className={css.name}>
                        <div>
                            Имя
                        </div>
                        <Input style={{width:"40%"}} defaultValue={characteristics['Имя']} name ={'Имя'} onChange={onChange}/>
                        <div className={css.spek}>
                            <span className={css.item}>
                                <div>
                                    здоровье
                                </div>
                               <Input defaultValue={characteristics['здоровье']} name ={'здоровье'} onChange={onChange}/>
                            </span>
                            <span className={css.item}>
                                <div>
                                    подозрительность
                                </div>
                                <Input defaultValue={characteristics['подозрительность']} name ={'подозрительность'} onChange={onChange}/>
                            </span>
                        </div> 
                    </div>
                </div>
            </div>
            <div className={css.spek}>
                <span className={css.item}>
                    <div>
                        сила
                    </div>
                    <Input defaultValue={characteristics['сила']} name ={'сила'} onChange={onChange}/>
                </span>
                <span className={css.item}>
                    <div>
                        интеллект
                    </div>
                    <Input defaultValue={characteristics['интеллект']} name ={'интеллект'} onChange={onChange}/>
                </span>
                <span className={css.item}>
                    <div>
                        ловкость
                    </div>
                    <Input defaultValue={characteristics['ловкость']} name ={'ловкость'} onChange={onChange}/>
                </span>
                <span className={css.item}>
                    <div>
                        харизма
                    </div>
                    <Input defaultValue={characteristics['харизма']} name ={'харизма'} onChange={onChange}/>
                </span>

            </div>
        </div> 
    );
}

export default Profile;