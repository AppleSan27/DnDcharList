import Baff from "./Baff";
import Debaff from "./Debaff";
import css from "./index.module.css"


function Stat() {
    return ( 
        <div className={css.container}>
            <table>
                <tr>
                    <td >
                        <span style={{'padding':"0 5%"}}>Бафф</span> <Baff /></td>
                    <td>
                        <span style={{'padding':"0 5%"}}>Дебафф </span><Debaff/> </td>
                </tr>
            </table>
        </div> 
    );
}

export default Stat;