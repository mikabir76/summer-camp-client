import { useEffect, useState } from "react";

const useClass = ()=>{
    const [popularClass, setPopularClass] = useState([]);
    useEffect(()=>{
        fetch('https://summer-camp-school-server-wine.vercel.app/classes')
        .then(res => res.json())
        .then(data =>{
            setPopularClass(data)
        })

    }, [])
    return [popularClass]
}

export default useClass;