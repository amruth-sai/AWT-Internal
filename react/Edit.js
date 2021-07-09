import React, { Component } from 'react'
import axios from 'axios'
export class Edit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id : ''
        }
    }

    componentDidMount(){
        this.setState({
            id : this.props.match.params.id
        })
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
        axios.put('http://localhost:3000/emp/'+this.state.id,this.state)
        .then(res=>{
            console.log(res)
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    Rollno : <input type="text" name="id" value={this.state.id} readOnly={true}/> <br/>
                    Username : <input type="text" name="username" value={this.state.username} onChange={this.inputChange}/> <br/>
                    Branch : <input type="text" name="branch" value={this.state.branch} onChange={this.inputChange}/> <br/>
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Edit
