import React ,  { useState } from 'react';
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';


export const GifExpertApp=()=>{

    const [categories, setCategories] = useState( ['One Punch'])

    /*const HandleAdd = ()=>{
               setCategories([...categories, 'Hunter'])
               console.log(categories)
    }*/
    
    return (
     <>
        <h2>Gif Expert App</h2>
        <AddCategory setCategories={setCategories} />
        <hr/>
        <ol>
            {

                categories.map(category=> 
                    <GifGrid 
                    key={category}
                    category={category
                    }/>
                )
            }


        </ol>
     </>
    )
}

