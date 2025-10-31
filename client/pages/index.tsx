"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [room, setRoom] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = () => {
    if (room.trim() && name.trim()) {
      setIsLoading(true)
      router.push(`/chat?name=${encodeURIComponent(name)}&room=${encodeURIComponent(room)}`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && room.trim() && name.trim()) {
      handleLogin()
    }
  }

  return (
    <main className="login-container">
      <div className="login-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="login-content">
        <div className="login-header">
          <div className="header-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h1>Chat Room</h1>
          <p>Connect and start conversations instantly</p>
        </div>

        <form
          className="login-card"
          onSubmit={(e) => {
            e.preventDefault()
            handleLogin()
          }}
        >
          <div className="form-group">
            <label htmlFor="room">Room ID</label>
            <input
              id="room"
              type="text"
              placeholder="Enter room ID"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              onKeyPress={handleKeyPress}
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>

          <button type="submit" disabled={!room.trim() || !name.trim() || isLoading} className="login-button">
            {isLoading ? "Joining..." : "Enter Room"}
          </button>

          <p className="form-hint">Fill in both fields to join a chat room</p>
        </form>

        <div className="login-footer">
          <p>© 2025 Chat Room. Secure and instant messaging.</p>
        </div>
      </div>
    </main>
  )
}
