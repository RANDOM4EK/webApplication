import React from 'react'
import style from './MoodDescription.module.css'
import loveIt from '../../assets/lovedIt.png'
import good from '../../assets/good.png'
import meh from '../../assets/meh.png'
import bad from '../../assets/bad.png'

export default function MoodDescription() {
  return (
    <div className={style.moodDescription}>
      <p>Mood Description</p>
      <div className={style.moodDescriptionSpanCollection}>
        <span className={style.moodDescriptionSpan}><img src={loveIt} alt="" />Loved it</span>
        <span className={style.moodDescriptionSpan}><img src={good} alt="" />Good</span>
        <span className={style.moodDescriptionSpan}><img src={meh} alt="" />Meh</span>
        <span className={style.moodDescriptionSpan}><img src={bad} alt="" />Bad</span>
      </div>
    </div>
  )
}
