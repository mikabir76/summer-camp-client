import { useEffect, useState } from "react";

const useClass = ()=>{
    const [popularClass, setPopularClass] = useState([]);
    useEffect(()=>{
        fetch('class.json')
        .then(res => res.json())
        .then(data =>{
            setPopularClass(data)
        })

    }, [])
    return [popularClass]
}

export default useClass;