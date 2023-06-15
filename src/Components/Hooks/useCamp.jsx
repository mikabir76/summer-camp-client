import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
const useCamp =()=>{
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure();
    // const token = localStorage.getItem('access-token')
    const { refetch, data: classes = [],} = useQuery({
        queryKey: ['myclass', user?.email],
        enabled: !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async()=>{
            const res = await axiosSecure(`/myclass?email=${user?.email}`)
            console.log(res)
            return res.data
        },

      })
      return [classes, refetch]
}

export default useCamp;