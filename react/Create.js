import React, { Component } from 'react'
import axios  from 'axios'
export class Create extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             id : '',
             branch : ''
        }
    }
    
    inputChange = (event) =>{
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
    }

    handleSubmit = () =>{
        // event.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3000/emp',this.state)
        .then(res=>{
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    Rollno : <input type="text" name="id" value={this.state.id} onChange={this.inputChange}/> <br/>
                    Username : <input type="text" name="username" value={this.state.username} onChange={this.inputChange}/> <br/>
                    Branch : <input type="text" name="branch" value={this.state.branch} onChange={this.inputChange}/> <br/>
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Create
