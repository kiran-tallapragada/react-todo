/**
 * Created by stall2 on 7/15/2017.
 */
import React, {Component} from 'react';
import ToDo from '../components/ToDo';

class ToDoList extends Component {
    render(){
        const {dataItems,deleteToDo} = this.props;
        const dataSet = dataItems.map((text,index) =>
                        <ToDo
                           item={text}
                           itemIndex={index}
                           deleteToDo={deleteToDo}
                           key={index}
                        />
        );
        return (
            <div>
                <ul className="list-group">
                    {dataSet}
                </ul>
            </div>

        )
    }
}
export default ToDoList;