import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link for navigation
import style from './pageone.module.css';

function PageOne() {
  return (
    <div className={style.body}>
      <div className={style.container}>
        <h4>1/4</h4>
        <h3>Help Us Get to Know You</h3>
        <div className={style.bodyText}>Your journey begins here! Please provide some basic details to personalize your experience.</div>
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
        {/* Use Link to navigate to PageTwo */}
        {/* <Link to="/pagetwo" className={style.button}>Continue</Link> */}
      </div>
    </div>
  );
}

export default PageOne;
