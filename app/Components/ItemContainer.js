import React from 'react'
import style from '../page.module.css'
import Image from 'next/image'

export default function ItemContainer(prop) {
  return (
    <div className={style.itemContainer}>
      <div style={{display:'flex', alignItems:'center',gap:'20px', marginBottom:'20px'}}>
        <Image src={prop.object.image} width={40} height={40} alt='image not found'/>
        <span style={{fontSize:'16px', fontWeight:'500', color:'#000000'}}>{prop.object.title}</span>
      </div>
      <ul className={style.itemList}>
          {prop.object.content.map((item) => (
          <li key={item}>
            <div style={{display:'flex', gap:'10px'}}>
              <Image src={item[0]} width={20} height={20} alt='image not found'/>
              <span>{item[1]}<span style={{color:'#9bca3b'}}>{item[2] ? ' (Unlimited)' : ''}</span></span>
            </div>
            {
              item[3] ? 
                <div className={style.itemButtons}>
                  Get Addons
                </div>
              : ''
            }
          </li>
          ))}
      </ul>
    </div>
  )
}
