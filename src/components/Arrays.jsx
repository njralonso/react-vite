import { useEffect } from "react";

const arraysLearn = [
  { name: "concat", do: "Se usa para unir dos o más arrays. No cambia los arrays existentes, devuelve un nuevo array." },
  { name: "every" },
  { name: "fill" },
  { name: "filter", do: "Filtra por una condición y devuelve el resultado sobre el array que se esté iterando." },
  { name: "find" },
  { name: "forEach" },
  { name: "includes" },
  { name: "map" },
  { name: "reduce" },
  { name: "some" },
];

const objectsLearn = [
  { name: "entries" },
  { name: "freeze" },
  { name: "keys" },
];

// default function ArrayFilter() {
//   useEffect(() => {
//     const animesFilter = async () => {
//       let res = await fetch(`https://api.jikan.moe/v4/anime?limit=25`);
//       let json = await res.json();

//       // Devuelve los animes con el título superior a 10 caracteres
//       const filterMethodResult = json.data.filter((anime) => anime.title.length > 10);
//       console.log("arrayFilter", filterMethodResult);
//     };
//     animesFilter();
//   });
// }

export default function ArrayConcat() {
  useEffect(() => {
    const animesConcat = async () => {
      let res = await fetch(`https://api.jikan.moe/v4/anime?limit=25`)
      let json = await res.json()

      const arrData1 = json.data.producers
      const arrData2 = json.data.studios
      const concatMethodResult = arrData1.concat(arrData2)

      console.log("arrayConcat", concatMethodResult)
    }
    animesConcat()
  })
}