import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import './index.css'

export default function Sign() {
    const [page, setPage] = useState(0)

    return (
      <div className='template'>
        <div className='sign-view'>
          <div className={
                classNames(
                    'container',
                    page === 0 ? '' : 'right-panel-active'
                )
        }>
            <div className='form-container sign-in-container'>
              <form autoComplete='off'>
                <h1>Sign In</h1>
                <div className='social-container'>
                  <a href="#" className="social"><i className="fab fa-weixin"></i></a>
                  <a href="#" className="social"><i className="fab fa-google"></i></a>
                  <a href="#" className="social"><i className="fab fa-qq"></i></a>
                </div>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <a href="#" onClick={() => { 
                alert('I\'m sorry to hear that');            
              }}> Forgot your password ?</a>
                <button>Sign In</button>
              </form>
            </div>
                    
            <div className='form-container sign-up-container'>
              <form autoComplete='off'>
                <h1>Sign Up</h1>
                <div className='social-container'>
                  <a href="#" className="social"><i className="fab fa-weixin"></i></a>
                  <a href="#" className="social"><i className="fab fa-google"></i></a>
                  <a href="#" className="social"><i className="fab fa-qq"></i></a>
                </div>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button>Sign Up</button>
              </form>
            </div>

            <div className='overlay-container'>
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <button className='ghost' onClick={()=>{ setPage(0) }}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                  <button className='ghost' onClick={()=>{ setPage(1) }}>Sign Up</button>
                </div>
              </div>
            </div>
                
          </div>
        </div>
      </div>

    )
}