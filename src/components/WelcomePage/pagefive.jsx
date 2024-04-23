import React from 'react';
import style from './pageone.module.css';

function PageFive() {
  return (
  <div className={style.body}>
    <div className={style.container}>
      <h3>Create Your Account</h3>
      <div>Start your fitness journey by creating your fitBuddie account. Fill in your details below to get started.</div>
      <button className={style.button}>Sign up</button>
      <button className={style.button2}>Sign up with Google</button>
      <button className={style.button2}>Sign up with Email</button>
    </div>
  </div>
  );
}

export default PageFive;
