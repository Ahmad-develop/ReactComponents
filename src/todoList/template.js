import React, { Component } from "react"
import TodoData from "./data";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import "./todoList.css"



const Temp =(props)=>{

        return(

            <div className="wrapper" > 

                <input type="checkbox" 
                checked={props.TodoData.status}
                onChange={()=> props.handleChange(props.TodoData.id)}/>
                
                <div className="propsContainer">
                    <div>
                        {props.TodoData.todo}
                    </div>
                    <div className="time">
                        {props.TodoData.limitedTime}
                    </div>
                </div>

                <DeleteOutlinedIcon className="delButton"/>
                    
            </div>

        )
}


export default Temp