import React, { useContext, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import logo from '/logo1.jpg'


const StudDash = () => {
  return (
    <div style={{ border: '1px solid white', height: '100vh', width: '100vw' }}>
      <div style={{
        display: 'flex',
        margin: '22px 22px 28px 136px',
      }}>
        <span style={{ fontSize: 'xxx-large' }}>Dashboard</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          display: 'flex',
          height: '44vh',
          width: '83vw',
          backgroundColor: 'lightslategray',
          borderRadius: '25px',
        }}>
          <div style={{ display: "flex", flex: '1' }}>
            <div id='1' style={{display: 'flex', flexDirection: 'column', flex: '1', border: '1px solid black', borderRadius: '25px', width: '73%' }}>
              <div
              style={{
                fontSize: 'xx-large',
                margin: '13px',
                paddingLeft: '21px'
              }}
              >
                Your Name
              </div>
              <div style={{border: '1px solid red'}}>
                <div style={{display: 'flex'}}>
                  <span>Program: </span>
                  <div>CSE</div>
                </div>
              </div>
            </div>
            <div id='2' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '25px', width: '27%' }}>
              <Avatar
                alt="Remy Sharp"
                src={logo}
                sx={{ width: 143, height: 143 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudDash
