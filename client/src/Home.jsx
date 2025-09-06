import React from 'react'
import "./Home.css";
import "./App.css"
import { useNavigate } from "react-router-dom";

const Home = () => {
 const navigate = useNavigate();
   return (
    
    <div>
    <div className='container'>
      <div className="content">
        <div className="home-title">
          <p className='title'>welcome to votrix</p>
        </div>
        <div className="home-main-button">
          <button onClick={() => navigate("/register")}>REGISTER</button>
          <button onClick={() => navigate("/Voting")}>VOTE</button>
        </div>
        <div className="home-bottom">
          <div className="home-bottom-button">
          <button onClick={() => navigate("/Help")}>Help & Support</button>
          <button onClick={() => navigate("/Instruction")}>Instruction</button>
          <button onClick={() => navigate("/Result")}>Result</button></div>
          <div className="home-footer"> 
            <p>&copy; All rights reserved by Votrix.</p>
          </div>
        </div>


      </div>
    </div>

    </div>
  )
}

export default Home