import React from 'react'
import data from './data';
import langData from '../../lang/lang-fa';
import './service.css';

export const Service = () => {
  return (
    <section className='pt-8 bg-gradiant'>
        <header className='text-center'>
          <div className='relative inline-block px-8 text-center'>
            <p className='absolute right-0 w-48 h-7 bg-semi-transparent-blue'></p>
            <span className='relative text-4xl text-gray-50 z-2'>{langData.services.title}</span>
          </div>
          <p className='text-gray-500'>{langData.services.desc}</p>
        </header>
    </section>
  )
}
