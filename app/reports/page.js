import React from 'react'
import style from '../page.module.css'
import support from '../img/support.png'
import interview from '../img/interview.png'
import complementary from '../img/complementary.png'
import branding from '../img/branding.png'
import integration from '../img/integration.png'
import settings from '../img/settings.png'
import yes from '../img/yes.png'
import no from '../img/no.png'
import ItemContainer from '../Components/ItemContainer'

export default function page() {
  const listItems = [
    {
      image: support, 
      title: 'Support',
      content: [
        [yes, 'Email Support'],
        [no , 'Chat Support'],
        [yes, 'Phone Support']
      ]},
    {
      image: branding,
      title:'Branding',
      content: [
        [yes,'Email Template Customization'],
        [no ,'Interview Branding'],
        [no ,'Candidate Evaluation Page Branding']
      ]},
    {
      image: interview,
      title: 'Interview',
      content: [
        [yes,'Pre-recorded Interviews', '-----'],
        [yes,'Live Interviews'],
        [yes,'Live Interviews Recording'],
        [yes,'Panel Interview']
      ]},
    {
      image: integration,
      title:'Integration',
      content: [
        [no ,'Third-Party ATS Integrations'],
        [no ,'Email & Calender Integration'],
        [yes,'Social Media Integrations']]},
    {
      image: complementary,
      title:'Complementary',
      content: [
        [yes,'Job Posting', '-----'],
        [yes,'Sub Accounts', '-----'],
        [yes,'Bulk Invitation', '-----', '--'],
        [yes,'Interview Insights (Tracking)', '-----'], 
        [yes,'Auto Reminder'],
        [yes,'SMS']
      ]},
    {
      image: settings,
      title:'Settings',
      content: [
        [yes, 'SMTP Settings']
      ]}
  ]

  return (
    <div>
      <span style={{fontSize:'16px', fontWeight:'500', color:'#000000', display:'block',marginBottom:'20px'}}>Enterprise Plans(Feature)</span>
      <div className={style.contentContainer}>
        {listItems.map((objects) => (
          <ItemContainer key={listItems} object={objects}/>
          ))}
      </div>
    </div>
  )
}
