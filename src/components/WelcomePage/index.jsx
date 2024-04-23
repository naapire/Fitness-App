import React from 'react'
import style from './index.module.css'
import vector from '../Asserts/Vector (3).svg'
function Index() {
  return (
    <div className={style.main}>
        <div className={style.container}>
        <div><img src= {vector} alt="" /></div>
      <h1>My Fitness App</h1>
        </div>
      
    </div>
  )
}

export default Index
