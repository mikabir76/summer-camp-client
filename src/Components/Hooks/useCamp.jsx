import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
// import useAxiosSecure from './useAxiosSecure';
const useCamp =()=>{
    const {user} = useAuth()
    // const [axiosSecure] = useAxiosSecure();
    // const token = localStorage.getItem('access-token')
    const { refetch, data: classes = [],} = useQuery({
        queryKey: ['myclass', user?.email],
        // enabled: !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async()=>{
            const res = await fetch(`https://summer-camp-school-server-wine.vercel.app/myclass?email=${user?.email}`)
            
            return res.json()
        },

      })
      return [classes, refetch]
}

export default useCamp;