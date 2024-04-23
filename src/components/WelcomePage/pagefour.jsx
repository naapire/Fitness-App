import React from 'react'
import style from './pageone.module.css';
function pagefour() {
  return (
    <div className={style.body}>
    <div className={style.container}>
    <div>
      <h4>4/4</h4>
      <h3>Tell us about your dietary habits</h3>
      <div className={style.bodyText}>Your diet plays a crucial role in achieving your fitness goals. Share your dietary preferences with us, and we'll tailor your nutrition plan accordingly.</div>
    </div>
    <div>
      <p className={style.buttonText}>Select your gender</p>
      <p className={style.hintText}>This helps us to estimate your body’s metabolic rate</p>
    </div>
    <div className={style.input}>
      <label htmlFor="male" className={style.bodyText}>
        <input type="radio" id="male" name="gender" value="male" /> Male
      </label> <br />
      <label className={style.bodyText} htmlFor="female">
        <input type="radio" id="female" name="gender" value="female" /> Female
      </label>
      <div>
          <h3 className={style.buttonText}>Enter your age</h3>
          <input type="text" placeholder='Type your age' className={style.inputText}/>
      </div>
      <div>
          <h3 className={style.buttonText}>Enter your weight (in kg)</h3>
          <input type="text" placeholder='Enter your weight' className={style.inputText}/>
      </div>
      <div>
          <h3 className={style.buttonText}>Enter your height (in cm)</h3>
          <input type="text" placeholder='Enter your height' className={style.inputText}/>
      </div>
      <button className={style.button}>Continue</button>
    </div>
  </div>
 </div>
  )
}

export default pagefour
