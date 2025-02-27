import React from 'react'
import style from "./NavBar.module.css"

export default function NavBar() {
  return (
    <div className={style.navMenu}>
      <span>Journal</span>
      <span>Insights</span>
      <span>Explore</span>
    </div>
  )
}
