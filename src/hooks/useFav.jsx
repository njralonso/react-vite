import { useState, useEffect } from "react";

const useFav = () => {
   const [animes, setAnimes] = useState(null)
   useEffect(() => {
      const addFav = async () => {
         const res = await fetch("users.json")
         const data = await res.json()
         setAnimes(await data)
      }
      // addFav()
   }, [])
   if (!animes !== null) return { animes }
}
export default useFav

export const useFavSetFav = () => {
   const [favorite, setFavorite] = useState(null)
   const newFavorite = { favorites: [{ id: 3, name: "Naruto", history: "dsfash" }] }
   useEffect(() => {
      const setFav = async () => {
         try {
            const res = await fetch("http://localhost:3000/animes", {
               method: "POST",
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify(newFavorite), // data can be `string` or {object}!
            })
            const data = await res.json()
            setFavorite(await data)
            if (!res.ok) throw new Error("Error al escribir en el archivo JSON")
         } catch (err) { }
      }
      setFav()
   }, [])
   console.log(favorite, "hook")
}