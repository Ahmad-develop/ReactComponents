import React, { Component } from "react"
import TodoData from "./data"
import Temp from "./template"
import "./todoList.css"

class TodoList extends Component {
    constructor(){
        super()
        this.state = {
            todos: TodoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState => {
            const updateState = prevState.todos.map(todo =>{
                if(todo.id === id){
                    return{
                        ...todo,
                        status : !todo.status
                    }

                }
                return todo
            })
            return updateState
        })
    }
    


    render(){

        const data_ = TodoData.map(todo_ => <Temp key={todo_.id} TodoData = {todo_}/>)

        return(
            <>
                <h1 className="heading">React Todo App</h1>
                <div className="todolist">{data_}</div>
            </>
        )
    }

}



export default TodoList