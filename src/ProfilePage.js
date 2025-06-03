import React from 'react'
import profile from './profile.png'
import imageL2 from "./userL.png";
import imageS from "./system.png";


function ProfilePage() {
    return (
        <div className='profilePage d-flex align-items-center justify-content-center '>
            <div className='box'></div>
            <div className="card cards w-75 rounded-0" >
                <div className='d-flex align-items-center justify-content-center mt-1'>
                    <img src={profile} className="card-img-top rounded-circle " alt="..." />
                </div>
                <div className="card-body d-flex alilgn-items-center justify-content-center">
                    <div>
                        <h4 className="card-title">Admin User</h4>
                        <h6 className="card-text text-primary">Super Administrator</h6>
                    </div>

                </div>
                <div className='d-flex align-items-center justify-content-around '>

                    <button type="button" className="btn btn-outline-primary">
                        <h2>20</h2>
                        <h4>Projects</h4>
                    </button>
                    <button type="button" className="btn btn-outline-primary">
                        <h2>20</h2>
                        <h4>Tasks</h4>
                    </button>
                    <button type="button" className="btn btn-outline-primary">
                        <h2>20</h2>
                        <h4>Teams</h4>
                    </button>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='user  m-3 p-3 '>
                        <div className='d-flex gap-2 align-items-center'>
                            <img src={imageL2} className='mb-2' />
                            <h5>Personal Information</h5>
                        </div>
                        <div className='mt-2'>
                            <div className='d-flex justify-content-between align-items-center '>
                                <h6>Admin</h6>
                                <p>Ishita Panchal</p>
                            </div>
                            <hr className='mt-0' />
                            <div className='d-flex justify-content-between align-items-center '>
                                <h6>Email</h6>
                                <p>ispanchal165@gmail.com</p>
                            </div>
                            <hr className='mt-0' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6>Last Login</h6>
                                <p>Today , 15:20pm</p>
                            </div>

                        </div>
                    </div>
                    <div className='user  m-5  p-3 '>
                        <div className='d-flex gap-2 align-items-center'>
                            <img src={imageS} className='mb-2' />
                            <h5>System Information</h5>
                        </div>
                        <div className='mt-2'>
                            <div className='d-flex justify-content-between align-items-center '>
                                <h6>Admin Since</h6>
                                <p>20th January</p>
                            </div>
                            <hr className='mt-0' />
                            <div className='d-flex justify-content-between align-items-center '>
                                <h6>Permission</h6>
                                <p>Full Access</p>
                            </div>
                            <hr className='mt-0' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6>Security</h6>
                                <p>High</p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <div className='box1'></div>
        </div >
    )
}

export default ProfilePage