import { useState } from "react";
import AnimeCard from "./AnimeCard";
import InputSearch from "./InputSearch";
import useRequest from "../hooks/useRequest";

export default function AnimeList({ url }) {
  const { data, loading, error } = useRequest(url)
  const [value, setValue] = useState(null)
console.log(data)
  function handleKeyUp(e) {
    setValue(e.target.value)
  }

  // Validación de objeto no vacío para que la app no se rompa
  if (data !== null) {
    const datos = data.data

    // Condición para mostrar todos los animes o solamente los que coincidan con el input
    const arrayFilter = value !== null ? datos.filter(element => element.title.toLowerCase().includes(value)) : datos

    return (
      <>
        <InputSearch handleEvent={handleKeyUp} />
        {arrayFilter.map((anime, index) => (
          <AnimeCard
            key={index}
            title={anime.title}
            image={anime.images.jpg.image_url}
            genres={anime.genres.map((genres) => genres.name)}
          />
        ))}
      </>
    );
  }
}
