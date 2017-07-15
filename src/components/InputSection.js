/**
 * Created by stall2 on 7/15/2017.
 */
import React,{Component} from 'react';

class InputSection extends Component {
    constructor() {
        super();
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    handleKeyDown = (e) =>{
        const {addToDo} = this.props;
        if(e.keyCode === 13) {
            addToDo(e.target.value);
            e.target.value = '';
        }
    }
    render() {
        return(
            <div className="row">
               <div className="search-bar col-md-12">
                <h1>Add to do</h1>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add todo here"
                    onKeyDown={this.handleKeyDown}
                />
               </div>
            </div>
        )
    }
}

export default InputSection;