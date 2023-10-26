'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import arrow from '../img/arrow.png'
import style from '../page.module.css'
import brief from '../img/briefcase.png'
import Link from 'next/link'

export default function SidebarItem(sidebar) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openSublist = () => {
    setIsOpen((prev) => !prev)
    console.log("Opened Sublist");
  }
  if(sidebar.isCollapsed){
    if(sidebar.item.link){
      return (
        <Link href={sidebar.item.link} className={style.sidebarItem} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
          <span className={style.itemIcon}>
            <Image src={sidebar.item.image} width={20} height={20} alt='image not found'/>
          </span> 
          <div className={isVisible ? style.itemNameToolTip : style.toolTipHidden}>
            <span className={style.toolTip}>{sidebar.item.title}</span>
          </div>
        </Link>
      )
    }else {
      return (
          <div className={style.sidebarItem} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            <span className={style.itemIcon}>
              <Image src={sidebar.item.image} width={20} height={20} alt='image not found'/>
            </span> 
              {
                isVisible ?
                <div className={style.subListContainer}>   
                  <div className={style.subListContainerToolTip}>
                  {
                  sidebar.item.content.map((item) => (
                    <Link href={item.link} key={item} className={style.subListToolTip}>
                      <span className={style.itemIcon}>
                        <Image src={item.image} width={20} height={20} alt='image not found'/>
                      </span> 
                        <span className={style.itemName}>{item.title}</span>
                    </Link>
                  ))
                  }
                  </div>
                </div>
                : ''
              }
          </div>
      )
    }
  }else{
    if(sidebar.item.link){
      return (
        <Link href={sidebar.item.link} className={style.sidebarItem}>
          <span className={style.itemIcon}>
            <Image src={sidebar.item.image} width={20} height={20} alt='image not found'/>
          </span> 
          <span className={style.itemName}>{sidebar.item.title}</span>
      </Link>
      )
    } else{
      return (
        <div>
          <div className={style.sidebarItem} style={isOpen ? {background:'#0000001a'} : {}} onClick={() => openSublist()}>
            <span className={style.itemIcon}>
              <Image src={sidebar.item.image} width={20} height={20} alt='image not found'/>
            </span> 
            <span className={style.itemName}>{sidebar.item.title}</span>
            <span className={style.itemButton}>
              <Image src={arrow} width={20} height={20} style={isOpen ? {transform:'rotate(90deg)'} : {transform:'rotate(-90deg)'}} alt='image not found'/>
            </span>
          </div>
          {
            isOpen ?  
            <div style={{background:'#0000001a', paddingBottom:'10px'}}>    
            {sidebar.item.content.map((item) => (
              <Link href={item.link} key={item} className={style.subList} on={() => setIsActive((prev) => !prev)}>
                <span className={style.itemIcon}>
                  <Image src={item.image} width={20} height={20} alt='image not found'/>
                </span> 
                  <span className={style.itemName} style={isActive ? {color:'#9bca3b'} : {}}>{item.title}</span>
              </Link>
            ))}
            </div>
            : ''
          }
        </div>
      )
    }
  }
}
