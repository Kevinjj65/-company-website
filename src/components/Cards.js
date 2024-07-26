import React from 'react';
import './cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>WE ARE:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/img2.webp'
              text='DIGITAL MARKETING'
              label='Service'
              path='/digital'
            />
            <CardItem
              src='./images/img1.jpg'
              text='DESIGN'
              label='Products'
              path='/design'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./images/img3.jpg'
              text='ADVERTISING & CREATIVE'
              label='Products'
              path='/advertise'
            />
            <CardItem
              src='./images/img4.jpg'
              text='IT SERVICES'
              label='Service'
              path='/it'
            />
            <CardItem
              src='./images/img5.jpg'
              text='BUSINESS SERVICES'
              label='Servce'
              path='/business'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;