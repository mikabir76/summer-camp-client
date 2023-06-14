import { useEffect, useState } from "react";

const useClass = ()=>{
    const [popularClass, setPopularClass] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data =>{
            setPopularClass(data)
        })

    }, [])
    return [popularClass]
}

export default useClass;