import React from 'react'
import { Switch } from 'react-router'
import { BrowserRouter, Route, Link,Path } from "react-router-dom";
import Create from './Create';
import Display from './Display';
import Edit from './Edit';


function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <Link to="/create"><li>Create</li></Link>
                    <Link to="/edit/:id"><li>Edit</li></Link>
                    <Link to="/getStudents"><li>Display</li></Link>
                    
                    <Switch>
                        <Route path="/create" component={Create}/>
                        <Route path="/edit/:id" component={Edit}/>
                        <Route path="/getStudents" component={Display}/>
                    </Switch>

                </ul>
            </nav>
        </div>
    )
}

export default NavBar
