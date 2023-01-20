import React from 'react'
import people from '../../gpt3 aasets/Group 81.png'
import ai from '../../gpt3 aasets/Illustration.png'
import './header.css'
const Header = () => {
  return (
    <div className='gpt__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>let's build something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. 
          Indulgence way everything joy alteration boisterous the attachment.
           Party we years to order allow asked of.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='your email address'></input>
          <button type='button'>Get Started</button>
        </div>   
      <div className="gpt3__header-content__people">
        <img src={people} alt='people'/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
      </div>
    <div className="gpt3__header-image">
      <img src={ai} alt='ai'/>
    </div>
  
  </div>
  )
}

export default Header