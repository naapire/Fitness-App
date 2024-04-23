import React from 'react'
import style from './pageone.module.css';

function pagetwo() {
  return (
  <div className={style.body}>
    <div className={style.container}>
      <div>
        <h3>Tell Us Your Fitness Goals</h3>
        <div className={style.bodyText}>What are your primary fitness objectives? Let us know your goals, and we'll help you reach them!</div>
        <div className={style.buttonText}>What are your primary fitness goals? </div>
        <div>
        <p><input type="text" placeholder='Lose weight' className={style.inputText}/></p>
        <p><input type="text" placeholder='Gain Muscle' className={style.inputText}/></p>
        <p><input type="text" placeholder='Keep Fit' className={style.inputText}/></p>
        <p><input type="text" placeholder='Get Stronger' className={style.inputText}/></p>
        </div>
        <div className={style.buttonText}>Do you have specific target areas you want to focus on?</div>
        <div className={style.input}>
            <input type="text" placeholder='Chest'/>
            <input type="text" placeholder='Back'/>
        </div>
        <div className={style.input}>    
            <input type="text" placeholder='Shoulder'/>
            <input type="text" placeholder='Arms'/>
        </div>
        <div className={style.input}>
            <input type="text" placeholder='Abdomen'/>
            <input type="text" placeholder='legs'/>
        </div>
        <button className={style.button}>Continue</button>
      </div>
    </div>
   </div> 
  )
}

export default pagetwo
