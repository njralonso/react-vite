import { useEffect } from "react";

const ArraysLearn = [
  { name: "concat" },
  { name: "every" },
  { name: "fill" },
  { name: "filter" },
  { name: "find" },
  { name: "forEach" },
  { name: "includes" },
  { name: "map" },
  { name: "reduce" },
  { name: "some" },
];

const ObjectsLearn = [
  { name: "entries" },
  { name: "freeze" },
  { name: "keys" },
];

export default function Arrays() {
  useEffect(() => {
    const animes = async () => {
      let res = await fetch(`https://api.jikan.moe/v4/anime?limit=25`);
      let json = await res.json();

      // input de búsqueda
      const filterValue = "a";

      // obtener animes donde el título empiece por C
      const animesC = json.data.filter((anime) => anime.title.length == 6);
      console.log("json.data", json.data);
      console.log("filter", filterValue);
    };
    animes();
  });
}
