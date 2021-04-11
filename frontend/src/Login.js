import React, { Component } from 'react'

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            name: null,
            logged_in:false
        }
        this.login = this.login.bind(this);
    }
    login(){
        fetch("http://127.0.0.1:5000/login")
        .then(res =>res.text())
        .then((res)=>{
            this.setState({name:res,logged_in:true})
        })
    }
    render() {
        return (
            <>
                {this.state.logged_in == false ?
                <>
                <div className="form-group">
                    <input type="submit" value="Authenticate Me" onClick={()=>{this.login()}} className="btn btn-primary" />
                </div>
                </>
                :
                <div>
                    <div className="details">
                        Hello {this.state.name} !
                        <br />
                        You are successfully logged in to the system.
                        You may logout of the system by clicking on logout button as shown below.
                        <div className="form-group">
                            <input type="submit" value="Logout" onClick={()=>{this.setState({msg:null,logged_in:false})}} className="btn btn-primary" />
                        </div>  
                    </div>
                </div>
                }
            </>
        )
    }
}
