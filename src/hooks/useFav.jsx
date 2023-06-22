import { useState, useEffect } from "react";

const useFav = () => {
   const [animes, setAnimes] = useState(null)
   useEffect(() => {
      const addFav = async () => {
         const res = await fetch("users.json")
         const data = await res.json()
         setAnimes(await data)
         console.log(data, "data")
      }
      addFav()
   }, [])
   if (!animes !== null) return { animes }
}

export default useFav