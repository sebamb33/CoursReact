import React, { useEffect } from 'react'
import axios from 'axios'
const testApi = () => {
    const page = () =>
    {
        const [data,setdata] = useState(null)
        const [loading,setLoading] = useState(true)
        useEffect(()=>{
            const fetchData= async ()=>
            {
                try{
                    const reponse = await axios.get('routeApi de lexo')
                }catch(error)
                {
                    console.log(error)
                }
            }

        })
    }
  return (
    <div>
      
    </div>
  )
}

export default testApi
