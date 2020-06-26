import React, { useState, useEffect } from 'react'
import app from "./firebase"

// React Context are similar to Environment in SwiftUI
export const AuthContext = React.createContext()

// Hook as a Component, and then as a Context
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [pending, setPending] = useState(true)

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    })
  }, [])

  if (pending) {
    // Copied from github react-firebase-auth inside Auth.js
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}