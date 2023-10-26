'use client'
import React, { useState } from 'react'
import style from '../page.module.css'
import SidebarItem from './SidebarItem'
import BottomListItem from './BottomListItem'
import Image from 'next/image'
import brief from '../img/briefcase.png'
import plus from '../img/plus.png'
import hamb from '../img/hamb.png'
import interview from '../img/interview.png'
import welcome from '../img/welcome.png'
import Link from 'next/link'

export default function Sidebar() {
  const sidebarItems = [
    {
      image: interview,
      title:'Positions',
      link:'../positions',
      content:[],
    },
    {
      image: brief,
      title:'Setup Interview',
      content:[
        {
          image: brief,
          title:'Interview Kit',
          link: '../'
        },
        {
          image: brief,
          title:'Post a Job',
          link: '../'
        },
        {
          image: brief,
          title:'Schedule Interview',
          link: '../'
        },
      ],
    },
        {
      image: interview,
      title:'Applicants',
      content:[
        {
          image: brief,
          title:'Evaluate',
          link: '../'
        },
        {
          image: brief,
          title:'Track',
          link: '../'
        },
        {
          image: brief,
          title:'Shared Interview',
          link: '../'
        },
      ],
    },
    {
      image: brief,
      title:'Sub Accounts',
      link:'../subaccounts',
      content:[],
    },
    {
      image: interview,
      title:'Reports',
      content:[
        {
          image: brief,
          title:'Reports',
          link: '../reports'
        },
        {
          image: brief,
          title:'Expenditure',
          link: '../'
        },
      ],
    },
    {
      image: brief,
      title:'Integrations',
      content:[
        {
          image: brief,
          title:'Integrations',
          link: '../'
        },
        {
          image: brief,
          title:'Interview Listing',
          link: '../'
        },
      ],
    },
    {
      image: brief,
      title:'Billing',
      content:[
        {
          image: brief,
          title:'Subscription',
          link: '../'
        },
        {
          image: brief,
          title:'Transaction History',
          link: '../'
        },        
        {
          image: brief,
          title:'Payment Method',
          link: '../'
        },
      ],
    },
  ]
  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapseSidebar = () => {
    setIsCollapsed((prev) => !prev)
    console.log("Changed State");
  }
  
  console.log(isCollapsed);
  return (
    <div className={style.sidebarWrapper}>  
        <button className={style.sidebarButton} onClick={() => collapseSidebar()}>
          <Image src={hamb} height={28} width={28} alt="Sidebar button"/>
        </button>
      <aside className={isCollapsed ? style.sidebarCollapsed: style.sidebar}>
        <Link href='../' className={style.sidebarTop}>
            <Image src={welcome} 
            style={isCollapsed ? 
            {height:'30px', width:'30px', borderRadius:'5px'} : 
            {height:'70px', width:'70px', borderRadius:'5px'}} 
            alt="Welcome" />
          <div style={isCollapsed ? {display:'none'} : {}}>
            <span style={{ display:'block', fontSize:'15px', fontWeight:'500'}}>Welcome!</span>
            <span>Jobma LLC</span>
          </div>
        </Link>
        <div className={style.sidebarScrollable}>
          <ul className={style.sidebarList}>
            {
              sidebarItems.map((item) =>(
                <SidebarItem key={item} item={item} isCollapsed={isCollapsed}/>
              ))
            }
          </ul>
          <div className={style.sidebarBottom} style={isCollapsed ? {display:'none'} : {}}>
            <div className={style.credits}>
              <div>
                <span style={{display:'block', fontSize:'13px', margin:'0px'}}>Credits</span>
                <span style={{display:'block', fontSize:'20px', fontWeight:'500'}}>12345</span>
              </div>
              <div className={style.creditsButton}>
                <Image src={plus} width={32} height={32} alt='add credits'/>
              </div>
            </div>
            <ul className={style.bottomList}>
              <BottomListItem itemName='Get Started' className={style.getStarted}/>
              <BottomListItem itemName='Essential Plan' className={style.essentialPlan}/>
              <BottomListItem itemName='Training' className={style.training}/>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  )
}