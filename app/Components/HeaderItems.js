'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import style from '../page.module.css'

export default function HeaderItems(prop) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div key={prop.index} className={style.headerItems} style={{background:`${prop.item.background}`}} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
    <Image src={prop.item.image} width={20} height={20} alt={prop.item.tooltip}/>
    <div className={isVisible ? style.headerItemToolTip : style.toolTipHidden}>
      {/* <span className={style.toolTip}>
        {prop.item.tooltip}
      </span> */}
    </div>
  </div>
  )
}
