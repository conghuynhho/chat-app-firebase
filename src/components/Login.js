import React from 'react'
import { FacebookOutlined, GoogleOutlined} from '@ant-design/icons'

export default function Login() {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to chatapp</h2>
        <div className="login-button facebook">
          <FacebookOutlined />
          Login with Facebook
        </div>
        <div className="login-button google">
          <GoogleOutlined />
          Login with Google
        </div>
      </div>
    </div>
  )
}
