import { useState, useEffect } from "react";
import AnimeCard from "./AnimeCard";
import InputSearch from "./InputSearch";

export function ApiRequest() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  function handledValue(e) {
    setValue(e.target.value);
    // data.map((item) => {
    //   console.log(item.includes(value.toLowerCase()));
    // });

    // console.log(e.target.value);
    console.log(data);
  }

  useEffect(() => {
    const animes = async () => {
      let res = await fetch(`https://api.jikan.moe/v4/anime?limit=5`);
      let json = await res.json();

      let array = [];
      let items = json.data;
      items.forEach((element) => {
        array.push(element);
      });
      setData([...array]);
    };
    animes();

    return () => {};
  }, []);

  return (
    <>
      <InputSearch handleEvent={handledValue} />
      {data.map((anime, index) => (
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
