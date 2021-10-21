import React  from 'react'
import {GifGridItem} from './GifGridItem'
import { useFecthGifs } from '../hooks/useFecthGifs'

export const GifGrid = ({category}) => {
    //const [images, setimages] = useState([])

    const { data :images, loading}= useFecthGifs(category);


    //const [count, setcount] = useState(0);


    
    return (
        <>
         <h3 className="card animate__animated animate__bounce">{category}</h3>
         {loading && <p className="card animate__animated animate__flash">Loading</p>}
             <div className="card-grid">

                {images.map(img=>(
                    <GifGridItem 
                    key= {img.id}
                    {...img}/>
                )
                )}
             </div>
        </>
    )
}
