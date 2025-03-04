import React from 'react'
import style from './AddNotes.module.css'

export default function AddNotes() {
  return (
    <div className={style.addNotes}>
      <form action="">
        <label htmlFor="">Additional Notes</label>
        <input type="text" />
      </form>
      <div className={style.saveChangeSpan}><span>Save Changes</span></div>
    </div>
  )
}
