import React from 'react'
import { Col, Divider, Row } from 'antd';
import { Button, Form, Input, InputNumber } from 'antd';
import Tooltip from '@mui/material/Tooltip';





function Loginpage() {
    return (
        <div class="container form">
            <div class="row justify-content-center">
                <Divider>
                    <Tooltip title="Logo" placement="right">
                        <img
                            alt="logo"
                            src="logo1.png"
                            className='img-fluid'
                            width='50'
                        />{' '}
                    </Tooltip>
                </Divider>
            </div>
            <div className="row justify-content-center px-5">
                <div className="col-lg-12 col-md-10">
                    <div className="wrap d-md-flex">
                        <img className='img' src="Loginimg.jpeg" alt="" width={400} />
                        <div className="login-wrap p-4 p-md-5 ">
                            <div className="d-flex">
                                <div className="w-100">
                                    <h3 className="mb-4">Sign In</h3>
                                </div>
                                <div className="w-100">
                                    <p className="social-media d-flex justify-content-end">
                                        <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></a>
                                        <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
                                    </p>
                                </div>
                            </div>
                            <form action="#" className="signin-form">
                                <div className="form-group mb-3">
                                    <label className="label" htmlFor="name">Username</label>
                                    <input type="text" className="form-control" placeholder="Username" required />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="label" htmlFor="password">Password</label>
                                    <input type="password" className="form-control" placeholder="Password" required />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign In</button>
                                </div>
                                <div className="form-group d-md-flex">
                                    <div className="w-50 text-left">
                                        <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="w-50 text-md-right">
                                        <a href="#">Forgot Password</a>
                                    </div>
                                </div>
                            </form>
                            <p className="text-center">Not a member? <a data-toggle="tab" href="#signup">Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginpage
