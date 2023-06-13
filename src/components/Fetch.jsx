import { useState, useEffect } from "react";
// import AnimeCard from "./anime/AnimeCard";

export function ApiRequest() {
  const [id, setId] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const animes = async () => {
      let res = await fetch(`https://api.jikan.moe/v4/anime?q=20`);
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

  console.log(data);
  return data.map((anime, index) => (
    <AnimeCard
      key={index}
      title={anime.title}
      description={anime.background}
      image={anime.images.jpg.image_url}
    />
  ));
}

export default function AnimeCard({ title, image, description }) {
  return (
    <div className="px-4 my-4">
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className="block">
          <img className="rounded-t-lg w-1/4 mx-auto" src={image} alt={title} />
          <div className="">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              {title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
