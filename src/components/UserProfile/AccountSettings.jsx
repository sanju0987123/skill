import React from 'react'
import './AccountSettings.css'

const AccountSettings = () => {
  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Ediy your Personal Information</h1>

      <div className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Your Name <span>*</span></label>
          <input type='text' name='name' id='name' />
        </div>

        <div className='form-group'>
          <label htmlFor='bio'>Bio<span>*</span></label>
          <input type='text' name='bio' id='bio'

          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email <span>*</span></label>
          <input type='email' name='email' id='email'

          />
        </div>
     
        <div className='form-group'>
          <label htmlFor='Url'>Any links <span>*</span></label>
          <input type='url' name='Url' id='url'

          />
        </div>

      
      </div>

      <button className='mainbutton1 border' 
        
        >Save Changes</button>
    </div>
  )
}

export default AccountSettings