import React from 'react'
import style from './pageone.module.css';
function Pagesix() {
  return (
   <div className={style.body}>
    <div className={style.container}>
      <h3>Sign Up</h3>
      <div className={style.bodyText}>Start your fitness journey by creating your fitBuddie account..</div>
      <div>
      <div>
            <h3 className={style.buttonText}>Name</h3>
            <input type="text" placeholder='Enter your name' className={style.inputText}/>
        </div>
        <div>
            <h3 className={style.buttonText}>Email address</h3>
            <input type="email" placeholder='Enter your email Address' className={style.inputText}/>
        </div>
        <div>
            <h3 className={style.buttonText}>Password</h3>
            <input type="password" placeholder='Create a secure password' className={style.inputText}/>
        </div>
        <div>
            <h3 className={style.buttonText}>Confirm Password</h3>
            <input type="text" placeholder='re-enter your password' className={style.inputText}/>
        </div>
      </div>
       <div className={style.bodyText}>By creating an account, you agree to our Terms of Service and acknowledge our Privacy PolicyBy creating an account, you agree to our Terms of Service and acknowledge our Privacy Policy</div>
       <button className={style.button}>Continue</button>
    </div>
  </div>

  )
}

export default Pagesix
