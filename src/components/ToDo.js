/**
 * Created by stall2 on 7/15/2017.
 */
import React, {Component} from 'react';

class ToDo extends Component {
    render(){
        const {item,itemIndex,deleteToDo} = this.props;
        return(
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-10">{item}</div>
                    <button className="btn btn-default col-md-2"
                        onClick={()=>deleteToDo(itemIndex)}
                    />
                </div>
            </li>
        )
    }
}
export default ToDo;