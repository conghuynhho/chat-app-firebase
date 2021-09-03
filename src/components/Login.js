import React from 'react'
import { FacebookOutlined, GoogleOutlined} from '@ant-design/icons'
import {auth} from '../firebase'
import firebase from 'firebase/compat/app'

export default function Login() {
  return (
    <div id="login-page">
      <div id="login-card" className="flex flex-col justify-center">
        <h1 className="my-2 text-2xl"><strong>Chat With Vi App</strong></h1>
        <div className="login-button facebook mb-2 block md:w-6/12 sm:w-8/12 mx-auto text-sm" onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
          <FacebookOutlined className="mr-2 align-middle"/>
          <span>Login with Facebook</span>
        </div>
        <div className="login-button google block md:w-6/12 sm:w-8/12 mx-auto text-sm" onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
          <GoogleOutlined className="mr-2 align-middle" />
          <span>Login with Google</span>
        </div>
      </div>
    </div>
  )
}
