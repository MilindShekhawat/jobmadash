'use client'
import React, { useState } from 'react'
import style from '../page.module.css'
import SidebarItem from './SidebarItem'
import BottomListItem from './BottomListItem'
import Header from './Header'
import Image from 'next/image'
import welcome from '../img/welcome.png'
import Link from 'next/link'

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapseSidebar = () => {
    setIsCollapsed((prev) => !prev)
    console.log("Changed State");
  }
  
  console.log(isCollapsed);
  return (
    <div className={style.sidebarWrapper}>  
      <aside className={isCollapsed ? style.sidebarCollapsed: style.sidebar}>
        <button className={style.sidebarButton} onClick={() => collapseSidebar()}>
          {isCollapsed ? ">" : "<"}
        </button>
        <div>
          <Link href='../' className={style.sidebarTop}>
            <Image src={welcome} width={70} height={70} style={{borderRadius:'5px'}} alt="Welcome" />
            <div>
              <span style={{ display:'block', fontSize:'15px', fontWeight:'500'}}>Welcome!</span>
              <span>Jobma LLC</span>
            </div>
          </Link>
          <ul className={style.sidebarList}>
            <SidebarItem itemName='Positions' link='../position'/>
            <SidebarItem itemName='Setup Interview' link='../setupinterview'/>
            <SidebarItem itemName='Applicants' link='../'/>
            <SidebarItem itemName='Sub Accounts' link='../'/>
            <SidebarItem itemName='Reports' link='../'/>
            <SidebarItem itemName='Integrations' link='../'/>
            <SidebarItem itemName='Billing' link='../'/>
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