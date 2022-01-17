import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
class home extends Component{
    render(){
        return(
            <div>
                <Router>
                        <Link to="/Login">Login</Link>
                        <Link to="/Register">Register</Link>
                        <Switch> 
                            <Route  path='/Login' component={Login}></Route>
                            <Route  path='/Register' component={Register}></Route>  
                        </Switch>
                    </Router>
            </div> 
        )
    }
}
export default home