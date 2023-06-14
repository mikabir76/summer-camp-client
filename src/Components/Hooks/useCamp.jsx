import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
const useCamp =()=>{
    const {user} = useAuth()
    const { refetch, data: classes = [],} = useQuery({
        queryKey: ['myclass', user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/myclass?email=${user?.email}`)
            return res.json()
        },

      })
      return [classes, refetch]
}

export default useCamp;