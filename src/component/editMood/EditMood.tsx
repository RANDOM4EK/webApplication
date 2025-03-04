import React from "react";
import style from "./EditMood.module.css"

export default function EditMood() {
  return (
    <div className={style.editMoodBox}>
      <div className={style.editMood}>
        <h1>Edit Mood Entry</h1> 
        <span className={style.editMoodSpan}>Cancel</span>
      </div>
      <div>
        <form action="" className={style.editMoodForm}>
            <label htmlFor="">Date</label>
            <input type="text" className={style.editMoodInputForm} />
        </form>
      </div>
    </div>
  );
}
