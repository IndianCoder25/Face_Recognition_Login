import React, { Component } from 'react'

export default class Register extends Component {
    constructor(){
        super()
        this.state = {
            name: null,
            result_status:null
        }
        this.register = this.register.bind(this);
    }
    register(){
        var name = this.state.name
        fetch("http://127.0.0.1:5000/register?name="+name)
        .then(res =>res.text())
        .then((res)=>{
            this.setState({name:name,result_status:res})
        })
    }
    render() {
        return (
            <>
                {this.state.result_status != "Done" ?
                <>
                <div className="form-group">
                    <label>Enter your name</label>
                    <input type="text" name="name" className="form-control" onChange={(e)=>{this.setState({name:e.target.value})}}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Take My Picture" onClick={()=>{this.register()}} className="btn btn-primary" />
                </div>
                </>
                :
                <div>
                    <div className="details">
                        Hello {this.state.name} !
                        <br />Your registration is successfully completed now you may proceed to login.
                    </div>
                </div>
                }
            </>
        )
    }
}
