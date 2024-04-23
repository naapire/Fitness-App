import React from 'react'
import style from './welcome.module.css'
import background from '../Asserts/character pic.svg'
function Welcome() {
  return (
    <div className={style.container}>
      <div className={style.secondPage}>
        <div ><button className={style.skip}>Skip</button></div>
      <h2 className={style.fit}>Welcome to fitBuddie</h2> 
     <div className={style.text1}>Your one-stop destination for all things fitness and nutrition.
Get ready to embark on a journey towards a healthier, happier you.</div>
      <button className={style.button1}>Get Started</button>
      <button className={style.button2}>Login</button> 
      </div>
    
    </div>
  )
}

export default Welcome
