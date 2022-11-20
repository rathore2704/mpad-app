import React from 'react'
import { Link } from 'react-router-dom'
import { ReactPropTypes } from 'react';
import PropTypes from 'prop-types'
import BsLc from './BsLc'
import Password from './Password'

export default function OpAp(props) {
    const opap = () => {
        let selectValue = document.querySelector(
            'input[name = operatorAdminPanel]:checked'
        ).value
        console.log(`Selected Value ${selectValue}`)
        if (selectValue === 'operatorPortal') {
            
            // window.location.replace(BsLc);
            return <Link to='/bslc'>{BsLc}</Link>
        } else if (selectValue === 'adminPortal') {
             
            // window.location.replace(Password);
            return <Link to='/password'>{Password}</Link>
        }
        return false
    }
    const title = {
        alignself: 'center'
    }

    // <style>
    //             .title {
    //                     align-self: center;
    //             }

    //             .opap {
    //                     align-self: center;
    //                     padding: 2em;
    //                     width: 20em;
    //                     min-height: 5em;
    //                     background-color: #0a0a23;
    //                     border: 1px solid #0a0a23;
    //                     color: #ffffff;
    //                     align-items: flex-end;
    //                     text-align: center;
    //                     size: 50px;
    //                     vertical-align: auto;
    //                     border-radius: 1em;
    //             }

    //             .operator-admin-input {

    //                     min-height: 0em;
    //                     background-color: #0a0a23;
    //                     border: 1px solid #0a0a23;
    //                     color: #ffffff;
    //                     align-items: flex-end;

    //             }

    //             .was {
    //                     display: flex;
    //                     align-items: center;
    //                     justify-content: center;

    //             }

    //             /* .operator-admin-label{
    //                     align-items: center;
    //             } */
    //     </style>
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid title' style={title}>
                    <a className='navbar-brand title' href='#'>
                        <h1>WELCOME TO MP&AD ENTERPRISES</h1>
                    </a>
                </div>
            </nav>
            <br />
            <br />
            <div className='mx-3 was'>
                <h2 className='mx-3'>Weighing Automation System</h2>
            </div>

            <hr />
            <div className='was'>
                <div className='my-3 mx-4 opap'>
                    <div className='operator-admin' id='opap-o'>
                        <input
                            className='operator-admin-input'
                            type='radio'
                            //onclick="opap()"
                            onClick={opap}
                            name='operatorAdminPanel'
                            value='operatorPortal'
                            id='operatorAdminPanel1'
                        />
                        <label
                            className='operator-admin-input'
                            htmlFor='operatorAdminPanel1'
                        >
                             Operator Panel
                        </label>
                    </div>
                    <div className='operator-admin' id='opap-a'>
                        <input
                            className='operator-admin-input'
                            type='radio'
                            //onclick="opap()"
                            onClick={opap}
                            name='operatorAdminPanel'
                            value='adminPortal'
                            id='operatorAdminPanel2'
                        />
                        <label
                            className='operator-admin-input'
                            htmlFor='operatorAdminPanel2'
                        >
                             Admin Panel
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
