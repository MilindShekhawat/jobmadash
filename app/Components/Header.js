'use client'
import React from 'react'
import style from '../page.module.css'
import collapseSidebar from './Sidebar'

export default function Header({ collapseSidebar }) {
  return (
    <nav className={style.header}> 
      <div className={style.headerLeft}>
        <div className={style.headerButton}>
          {/* <button  onClick={collapseSidebar}>
            {isCollapsed ? "<" : ">"}
          </button> */}
        </div>
        <div className={style.headerTitle}>
          <span style={{fontSize:'18.4px', fontWeight:'500', color:'#000000'}}>Dashboard</span>
        </div>
      </div>
      <div className={style.headerRight}>
        <form className={style.search}>
          <input type="text" placeholder='Search here...' style={{height:'100%', color:'#cccccc' , padding:'8px 22px'}}/>
          <input type='button' value='Q' style={{height:'100%', width:'64px', color:'#666666'}}/>
        </form>
        <div className={style.headerItems}>
          N
        </div>
        <div className={style.headerItems}>
          L
        </div>
        <div className={style.headerItems}>
          La
        </div>
        <div className={style.headerItems}>
          S
        </div>
        <div className={style.headerItems} style={{background:'#e4f2c7'}}>
          A
        </div>
      </div>
    </nav>
  )
}
