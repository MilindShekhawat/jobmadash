'use client'
import React, { useState } from 'react'
import style from '../page.module.css'
import SidebarItem from './SidebarItem'
import BottomListItem from './BottomListItem'
import Image from 'next/image'
import welcome from '../img/welcome.png'

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  console.log(isCollapsed);
  return (
    <div className={style.sidebarWrapper}>  
      <aside className={isCollapsed ? style.sidebarCollapsed: style.sidebar}>
      <button className={style.sidebarButton} onClick={() => setIsCollapsed((prev) => !prev)}>
        {isCollapsed ? "<" : ">"}
      </button>
        <div>
          <div className={style.sidebarTop}>
            <Image src={welcome} width={70} height={70} style={{borderRadius:'5px'}}alt="Welcome" />
            <div>
              <span style={{ display:'block', fontSize:'15px', fontWeight:'500'}}>Welcome!</span>
              <span>Jobma Llc</span>
            </div>
          </div>
          <ul className={style.sidebarList}>
            <SidebarItem itemName='Positions'/>
            <SidebarItem itemName='Setup Interview'/>
            <SidebarItem itemName='Applicants'/>
            <SidebarItem itemName='Sub Accounts'/>
            <SidebarItem itemName='Reports'/>
            <SidebarItem itemName='Integrations'/>
            <SidebarItem itemName='Billing'/>
          </ul>
          <div className={style.sidebarBottom}>
            <div className={style.credits}>
              <div>
                <span style={{display:'block', fontSize:'13px', margin:'0px'}}>Credits</span>
                <span style={{display:'block', fontSize:'20px', fontWeight:'500'}}>12345</span>
              </div>
              <div style={{background:'#52526d', height:'42px', width:'42px', borderRadius:'50%'}}>

              </div>
            </div>
            <ul className={style.bottomList}>
              <BottomListItem itemName='Get Started' bg='#333333'/>
              <BottomListItem itemName='Essential Plan' brdr='2px #9bca3b solid'/>
              <BottomListItem itemName='Training' bg='#00000033'/>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  )
}