import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <>
                <br />
                <div>
                    <h3 className="details">Introduction of the web-app</h3>
                    <div className="details">
                        This web application is made for the purpose of face recognition login using ReactJS as a frontend and Python Flask as a backend. Hence make sure that you have reactjs as well as python flask configured on your machine in order to run this application.
                    </div>
                </div>
                <br />
                <div>
                    <h3 className="details">Registration Process</h3>
                    <div className="details">
                        <ol>
                            <li>
                                First of all navigate to the register section from navbar of this page.
                            </li>
                            <li>
                                Start your python flask server.
                            </li>
                            <li>
                                Enter your name and click on the button which will take your image for the registration purpose which will help you log in to the system.
                            </li>
                            <li>
                                Registration is completed successfully.
                            </li>
                        </ol>
                    </div>
                </div>
                <br />
                <div>
                    <h3 className="details">Login Process</h3>
                    <div className="details">
                        <ol>
                            <li>
                                First of all navigate to the login section from navbar of this page.
                            </li>
                            <li>
                                Make sure that python server is started.
                            </li>
                            <li>
                                Click on the login button which will take your image for the login purpose and will allow you to enter into the system if you are authenticated user.
                            </li>
                        </ol>
                    </div>
                </div>
            </>
        )
    }
}
