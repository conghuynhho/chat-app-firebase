import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import {ChatEngine} from 'react-chat-engine'
import { auth } from '../firebase'
import { useAuth } from '../contexts/AuthContext'
import axios from 'axios'
import Spinner from './Spinner'

export default function Chats() {
  const history = useHistory()
  const {user} = useAuth()
  const [loading, setLoading] = useState(true)

  const handleLogout = async ()=>{
    await auth.signOut()
    history.push('/')
  }
  const getFile = async (url) => {
    const response = await fetch(url)
    const data = await response.blob()
    return new File([data],"userPhoto.jpg", {type: 'image/jpe'})
  }
  // add comment to test git alias pushlish
  useEffect(()=>{
    if(!user) {
      history.push('/')
      return 
    } 
    const createUser = async () =>{
      try {
        const formdata = new FormData()
        formdata.append('email',user.email)
        formdata.append('username',user.email)
        formdata.append('secret',user.uid)

        const avatar = await getFile(user.photoURL)
        formdata.append('avatar', avatar, avatar.name)
        await axios.post('https://api.chatengine.io/users/',formdata, {
          headers: {
            "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY
          }
        })
        setLoading(false)
      }
      catch(err){
        console.log(err, 'error')
      }
    }

    const getUser = async () => {
    try{
      await axios.get('https://api.chatengine.io/users/me/', {
        headers: {
          "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
          "user-name": user.email,
          "user-secret": user.uid
        }
      })
      setLoading(false)
    }
    catch(e){
      createUser()
    }
  }
  getUser()
  }, [history, user])

  if(!user || loading) return (<Spinner/>)
  return (
    <div className="chat-page">
      <div className="nav-bar flex flex-wrap justify-between self-center">
        <div className="logo-tab flex self-center ml-4 hidden sm:block">Chat With Vi ❤</div>
        <div className="logo-tab flex self-center ml-4">❤❤❤</div>
        <div className="logout-tab flex self-center mr-3 font-bold" onClick={handleLogout}><span className="logout-button px-3 py-2">Logout</span></div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
        userName={user.email}
        userSecret={user.uid}
        offset={7}
      />
    </div>
  )
}
