import React,{Component} from 'react';
import axios from 'axios'
class login extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    handleChange=(event)=>
    {
     this.setState({
         [event.target.name]:event.target.value
     })   
    }
    handleLogin=(event)=>{
        event.preventDefault()
        axios.post(`login`,this.state)
        .then(res=>{
            //console.log("done");
            alert(res.data.message);
        })
        .catch(err=>{
            console.log(err);
        })
        //console.log("done1")
    }
    render()
    {
        return(
            <div>
                <div>
                
                    <form onSubmit={this.handleLogin}>
                        <p>UserId<input type="text" name="username" onChange={this.handleChange}/></p>
                        <p>Password<input type="password" name="password" onChange={this.handleChange}/></p>
                        <p><input type="submit" value="Login"/></p>

                    </form>
                </div>
                <h1>{this.state.UserId}</h1>
            </div>
        )
    }
}
export default login;