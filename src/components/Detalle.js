import { StarIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const Detalle = () => {

  let navigate = useNavigate();
  let { id } = useParams();

    console.log(id);

  

  return (

    <div className='bg-grey mx-[20rem] grid-cols-2 justify-items-center mx-10 my-7 h-10 border-500 '>
      <div className='contaiiner '>
        <button onClick={() => navigate('/Card')}>Back to session catalog</button>
        <StarIcon className='h-6 w-6 text-yellow-500 hover:fill-current' />

        <div>
          <h2 className=''></h2>

          <p>Speakers:</p>
          <p>Session type:</p>
          <p>Primary Topic:</p>
          <p>Lenguage:</p>
          <p>Industry Segment:</p>
          <p>description</p>
          <p>Date:</p>
          <p>Audience type:</p>
          <p>Audience Level:</p>
        </div>
      </div>

    </div>
  )
}
