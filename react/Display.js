import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Link,Path } from "react-router-dom";

export class Display extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             students : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/emp')
        .then(res=>{
            this.setState({
                students : res.data
            })
        })
    }

    onEdit = (id) => {
        console.log(id)
    }
    

    render() {
        console.log(this.state.students)

        return (
            <div>
                <table>
                    <tbody>
                        {
                        this.state.students.map(
                            student =>  <tr key={student.id}>
                                            <td>{student.username}</td>
                                            <td>{student.id}</td>
                                            <td>{student.branch}</td>
                                            <td>
                                                <Link to={`/edit/${student.id}`}>
                                                    <button onClick={() => this.onEdit(student.id)}>edit</button>
                                                </Link>
                                            </td>
                                        </tr>
                        )
                        }
                        </tbody>
                </table>
            </div>
        )
    }
}

export default Display
