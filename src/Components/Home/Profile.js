import React from 'react'
import './Profile.css'
import { AiOutlineInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Typical from 'react-typical'
import profile from '../../assests/Home/profile.png'

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href='https://www.instagram.com/tainerasmussen/' target='_blank'>
                <i><AiOutlineInstagram /></i>
              </a>
              <a href='https://www.linkedin.com/in/taine-rasmussen-a66a86184/' target='_blank'>
                <i><AiFillLinkedin /></i>
              </a>
              <a href='https://github.com/taine-rasmussen' target='_blank'>
                <i><AiFillGithub /></i>
              </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              {" "}
              Hello, I'M <span className='highlighted-text'>Taine</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    'Ethusiastic Dev',
                    1000,
                    'Full Stack Developer',
                    1000,
                    'Cross Platfrom',
                    1000,
                    'React/React Native Dev',
                    1000,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
                Knack of building apllications with front and back end operations.
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'>
              Hire me
            </button>
            <a href='Link to resume will for here' download='Taine Rasmussen.pdf'>
              <button className='btn highlighted-btn'>
                Get Resume
              </button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'>
            <img src={profile} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
