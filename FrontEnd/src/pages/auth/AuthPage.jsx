import { useState } from "react"
import { Login }  from '../../components/Login.jsx'
import { Register } from '../../components/Register.jsx'
import './authPages.css'

export const AuthPage = () => {
  const [isLogin, setIslogin] = useState(true)

  const handleAuthPageToggle = () => {
    setIslogin((prev) => !prev)
  }

  return (
    <div className="auth-container">
      {
        isLogin ? (
          <Login switchAuthHandler={handleAuthPageToggle}/>
        ) : (
          <Register switchAuthHandler={handleAuthPageToggle}/>
        )
      }
    </div>
  )
}

