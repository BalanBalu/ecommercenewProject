import React, { Component } from 'react';
import './SignUp.css'
class SignUp extends Component {
    render() {
        return (
            <div className='container  justify-content-center'>
                <div className="card mx-auto col-md-6 align-items-center p-3" style={{ marginTop: 100 }}>
                    <form className="md-auto ">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className='justify-content-start'>Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted float-left">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1" className='justify-content-start'>Phone number</label>
                            <input type="phone number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone Number" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        <div className='float-left'>
                            <button type="submit" className="btn btn-primary px-10">SignUp</button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;