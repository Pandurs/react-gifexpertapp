import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GrifGrid } from './components/GrifGrid';


export const GifExpertApp = () => {

const [categories, setCategories] = useState(['One Punch']);

    return(
        <>
            <h2>Alan monkiko Joaquin</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category=>(
                       <GrifGrid 
                            key = { category }
                            category = { category }
                       /> 
                    ) )
                }
            </ol>
        </>
    )
}
