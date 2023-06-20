import { useParams, useNavigate } from "react-router-dom";
import { useRequestByName } from "../hooks/useRequest";

export function AnimeProfileInformation() {
   const { name } = useParams()
   const { data, loading, error } = useRequestByName(`https://api.jikan.moe/v4/anime?q=${name}`, useParams().name)

   if (data !== null) {
      console.log(data, "Component AnimeProfileInformation")

      // Anime title
      const animeTitle = data.title
      console.log(animeTitle, "Anime title")

      // Anime genres
      const genres = data.genres
      const genresList = genres.map((genre) => genre.name).join(", ")

      // Anime synopsis
      const synopsis = data.synopsis
      // Anime image
      const image = data.images.jpg.image_url

      // Anime episodes
      const episodes = data.episodes
      const episodesList = []
      for (let i = 1; i <= episodes; i++) {
         episodesList.push(i)
         console.log(i)
      }

      // Category type [Anime, manga, ova, etc]
      // const type = data.demographics
      // const typeList = type.map((type) => type.type)

      // Anime status
      const status = data.status

      return (
         <>
            <div>
               <div className="bg-slate-100 flex p-4 mb-4">
                  <img src={image} alt="animeImage" className="rounded-md w-1/4" />
                  <div className="ml-4">
                     <h1 className="font-semibold">{animeTitle}</h1>
                     <p className="text-xs"><span className="font-semibold">Episodes:</span> {episodes}</p>
                     {/* <p className="text-xs"><span className="font-semibold">Type:</span> {typeList}</p> */}
                     <p className="text-xs"><span className="font-semibold">Status:</span> {status}</p>
                     <p className="text-xs"><span className="font-semibold">Genres:</span> {genresList}</p>
                  </div>
               </div>

               <div>
                  <div className="text-xs mb-4">
                     <p>{data.synopsis}</p>
                  </div>
                  <div>
                     <p>Watch episodes on</p>
                     <div className="flex justify-evenly">
                        <p className="border border-pink-400 p-2 bg-purple-100 rounded-md">Anime ID</p>
                        <p className="border border-pink-400 p-2 bg-purple-100 rounded-md">JKAnime</p>
                        <p className="border border-pink-400 p-2 bg-purple-100 rounded-md">AnimeFLV</p>
                     </div>
                  </div>
               </div>
               <div className="px-4">
                  {episodesList.map((episode, i) =>{
                    return( <div className="border p-2 border-black rounded-md shadow-md my-2" key={i}>{animeTitle} {episode}</div>)
                  })}
               </div>
            </div>
         </>
      )
   }
}


// export function AnimeInfo() {
//   console.log(useParams(), "nota: Hook useParams");
//   const { name } = useParams();

//   const navigate = useNavigate()

//   function handleBack() {
//     navigate(-1)
//   }
//   return (
//     <>
//       <h1>{name}</h1>
//       <button onClick={handleBack}>volver</button>
//     </>
//   );
// }
