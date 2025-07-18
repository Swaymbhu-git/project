import { useState } from 'react'
import './App.css'

function App() {
  const [selectedRole, setSelectedRole] = useState('student')

  const handleRoleSelect = (role) => {
    setSelectedRole(role)
  }

  return (
    <div className="welcome-screen">
        <div className="welcome-content">
          {/* Badge */}
          <div className="badge">
            <span className="sparkle-icon">✨</span>
            <span className="badge-text">Intervue Poll</span>
          </div>

          {/* Title */}
          <div className="title-section">
            <h1 className="title">
              <span className="title-welcome">Welcome to the </span>
              <span className="title-main">Live Polling System</span>
            </h1>
            <p className="subtitle">
              Please select the role that best describes you to begin using the live polling system
            </p>
          </div>

          {/* Role Cards */}
          <div className="role-cards">
            <div 
              className={`role-card ${selectedRole === 'student' ? 'selected' : ''}`}
              onClick={() => handleRoleSelect('student')}
            >
              <h3 className="card-title">I'm a Student</h3>
              <p className="card-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            <div 
              className={`role-card ${selectedRole === 'teacher' ? 'selected' : ''}`}
              onClick={() => handleRoleSelect('teacher')}
            >
              <h3 className="card-title">I'm a Teacher</h3>
              <p className="card-description">
                Submit answers and view live poll results in real-time.
              </p>
            </div>
          </div>

          {/* Continue Button */}
          <button className="continue-button">
            Continue
          </button>
        </div>
    </div>
  )
}

export default App