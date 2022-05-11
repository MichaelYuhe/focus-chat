import { Button } from '@mui/material';
import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { register, login } from './actions/traditional';
import googleSignIn from './actions/google';
import githubSignIn from './actions/github';
import wechatSignIn from './actions/wechat';
import { useNavigate } from 'react-router-dom';
import './index.css';
import toast from 'react-hot-toast';

export default function Sign() {
  const [page, setPage] = useState(0);

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

    return (
      <div className="template">
        <div className="sign-view">
          <div
            className={
                classNames(
                    'container',
                    page === 0 ? '' : 'right-panel-active'
                )
        }>
            <div className="form-container sign-in-container">
              <form autoComplete="off">
                <div className="text-2xl font-bold">Sign In</div>

                <div className="social-container">
                  <div
                    href=""
                    className="social"
                    onClick={()=>{githubSignIn();}}>
                    <i className="fab fa-github"></i>
                  </div>
                  <div
                    href=""
                    className="social"
                    onClick={()=>{googleSignIn();}}>
                    <i className="fab fa-google"></i>
                  </div>
                  <div
                    href="#"
                    className="social"
                    onClick={()=>{wechatSignIn();}}>
                    <i className="fab fa-weixin"></i>
                  </div>
                </div>

                <input
                  type="email"
                  placeholder="Your Email Address"
                  onChange={(e) => { setLoginEmail(e.target.value); }}
                />

                <input
                  type="password"
                  placeholder="Your Password"
                  onChange={(e) => { setLoginPassword(e.target.value); }}
                />

                <div
                  className="cursor-pointer my-4 text-sm"
                  onClick={() => {
                toast('I\'m sorry to hear that');
                }}> Forgot your password ?</div>

                <Button
                  onClick={() => {
                  login(loginEmail, loginPassword);
                }}>Sign In</Button>
              </form>
            </div>

            <div className="form-container sign-up-container">
              <form autoComplete="off">
                <div className="text-2xl font-bold">Sign Up</div>

                <div className="social-container">
                  <div
                    href=""
                    className="social"
                    onClick={()=>{githubSignIn();}}>
                    <i className="fab fa-github"></i>
                  </div>
                  <div
                    href=""
                    className="social"
                    onClick={()=>{googleSignIn();}}>
                    <i className="fab fa-google"></i>
                  </div>
                  <div
                    href="#"
                    className="social"
                    onClick={()=>{wechatSignIn();}}>
                    <i className="fab fa-weixin"></i>
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => { setName(e.target.value); }}
                />

                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => { setRegisterEmail(e.target.value); }}
                />

                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setRegisterPassword(e.target.value);
                  }}
                />

                <Button
                  onClick={() => {
                    register(registerEmail, registerPassword);
                    navigate('../');
                }}>Sign Up</Button>
              </form>
            </div>

            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <button className="ghost" onClick={()=>{ setPage(0); }}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                  <button className="ghost" onClick={()=>{ setPage(1); }}>Sign Up</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    );
}
