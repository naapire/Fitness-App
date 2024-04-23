import React from 'react'
import style from './pageone.module.css';

function pagethree() {
  return (
  <div className={style.body}>
    <div className={style.container}>
       <h4>1/4</h4>
        <h3>Help us understand your typical activity level</h3>
        <div className={style.bodyText}>Understanding your activity level helps us tailor workouts to match your lifestyle and energy needs.</div>
        <div>
        <label className={style.bodyText} htmlFor="female">
          <input type="radio" id="female" name="gender" value="female" /> Sedentary (little to no exercise)
        </label><br />
        <label className={style.bodyText} htmlFor="female">
          <input type="radio" id="female" name="gender" value="female" />Lightly active (light exercise/sports 1-3 days a week)
        </label><br />
        <label className={style.bodyText} htmlFor="female">
          <input type="radio" id="female" name="gender" value="female" /> Moderately active (moderate exercise/sports 3-5 days a week)
        </label><br />
        <label className={style.bodyText} htmlFor="female">
          <input type="radio" id="female" name="gender" value="female" /> Very active (hard exercise/sports 6-7 days a week)
        </label><br />
        <label className={style.bodyText} htmlFor="female">
          <input type="radio" id="female" name="gender" value="female" /> Extremely active (very hard exercise/sports & physical job or 2x training)
        </label><br />
    
        </div>
      
        <button className={style.button}>Continue</button>
    </div>
   </div>
  )
}

export default pagethree
