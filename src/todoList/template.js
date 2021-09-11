import React, { Component } from "react"
import TodoData from "./data";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import "./todoList.css"



class Temp extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos_: TodoData
        }
    }

    render(){

        return(

            <div className="wrapper" > 

                <input type="checkbox" checked={this.props.TodoData.status}/>
                
                <div className="propsContainer">
                    <div>
                        {this.props.TodoData.todo}
                    </div>
                    <div className="time">
                        {this.props.TodoData.limitedTime}
                    </div>
                </div>

                <DeleteOutlinedIcon className="delButton" onClick={this.deletion} />
                    
            </div>

        )
    }
}


export default Temp