import { useQuery } from "@tanstack/react-query"

const useUser =()=>{
    // const {user} = useAuth()
    // const [axiosSecure] = useAxiosSecure();
    // const token = localStorage.getItem('access-token')
    const { refetch, data: users = [],} = useQuery({
        queryKey: ['users'],
        // enabled: !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async()=>{
            const res = await fetch('https://summer-camp-school-server-wine.vercel.app/users')
            
            return res.json()
        },

      })
      return [users, refetch]
}
export default useUser;