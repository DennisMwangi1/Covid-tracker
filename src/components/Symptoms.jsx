import React from 'react';
import cough from '../images/cough.jpg'
import headache from '../images/headache.png'
import fatigue from '../images/fatigue.jpg';
import shortness from '../images/shortness-breath.jpg'
import fever from '../images/fever.webp'
import loss from '../images/lossOfTaste.png'
import nausea from '../images/nausea.jpg'
import soreThroat from '../images/soreThroat.jpg'

function Symptoms() {
  return (
    <main className='grid grid-cols-4 place-items-center text-center gap-10 pt-14'>
      <div className='rounded-lg bg-slate-500 p-2'>
        <img src={cough} alt="" width='200px' />
        <h5 className='font-black pt-2'>Coughing</h5>
      </div>
      <div className='rounded-lg bg-slate-500 p-2'>
        <img src={headache} alt="" width='200px' />
        <h5 className='font-black pt-2'>Headache</h5>
      </div>
      <div className='rounded-lg bg-slate-500 p-2'>
        <img src={fatigue} alt="" width='200px' />
        <h5 className='font-black pt-2'>Fatigue</h5>
      </div>
      <div className='rounded-lg bg-slate-500 p-2'>
        <img src={shortness} alt="" width='200px' />
        <h5 className='font-black pt-2'>Shortness of Breath</h5>
      </div>
      <div className='rounded-lg bg-slate-500 p-2'>
        <img src={fever} alt="" width='120px' />
        <h5 className='font-black pt-2'>Fever</h5>
      </div>
      <div className='rounded-lg bg-slate-500 p-2'>
        <img src={loss} alt="" width='150px' />
        <h5 className='font-black pt-2'>Loss of Taste</h5>
      </div>
      <div className='rounded-lg bg-slate-500 p-2'>
        <img src={nausea} alt="" width='200px' />
        <h5 className='font-black pt-2'>Nausea</h5>
      </div>
      <div className='rounded-lg bg-slate-500 p-2'>
        <img src={soreThroat} alt="" width='200px' />
        <h5 className='font-black pt-2'>Sore Throat</h5>
      </div>
    </main>
  )
}

export default Symptoms