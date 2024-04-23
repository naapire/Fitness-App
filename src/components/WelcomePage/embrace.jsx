import React from 'react'
import Embrace from '../Asserts/character pic.svg' 
import style from './embrance.module.css'

function embrace() {
  return (
    <div className={style.container}>
        <div className={style.secondPart}>
        <h1 className={style.h1}>Embrace Vitality</h1>
        <div className={style.text}>Embrace a healthier lifestyle, discover the power of active living</div>
        </div>

    </div>
  )
}

export default embrace
