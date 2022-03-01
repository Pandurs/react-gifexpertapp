import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GrifGridItem } from './GrifGridItem';

export const GrifGrid = ({category}) => {

const{data:images,loading}=useFetchGifs(category);
  
  return (
    <>
    <h3 className = 'animate__animated animate__fadeIn'>{category}</h3>
     {loading && <p className = 'animate__animated animate__flash'> loading </p> }
    <div className='card-grid'>
           {
               images.map( img => (
                    <GrifGridItem 
                        key = {img.id}
                        {... img }
                    />
               ))
           }

    </div>
    </>
  )
}
        