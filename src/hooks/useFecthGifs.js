import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import { getGifs } from "../componentes/helpers/getGigs";

export const useFecthGifs=(category)=>{

    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    useEffect(()=>{
        getGifs(category)
        .then (imgs=>{
                setstate({
                        data: imgs,
                        loading:false
                    })
        })
    }, [category])

    return state;
}