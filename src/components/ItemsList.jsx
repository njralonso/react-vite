import { useState } from "react";

export default function ListaDeCosas() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([
    "Sword Art Online",
    "Yagate Kimi Ni Naru",
    "86 Eighty Six",
  ]);

  function handleValue(e) {
    setValue(e.target.value);
    // console.log(e.target.value)
    console.log(value);
  }

  const listaFiltrada = list.filter((item) =>
    item.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="px-4">
      <InputComponent handleEvent={handleValue} />

      <ul>
        {listaFiltrada.map((animes, index) => (
          <AnimeInformationComponent key={index} anime={animes} />
        ))}
      </ul>
    </div>
  );
}

function InputComponent({ handleEvent }) {
  return (
    <input
      onChange={handleEvent}
      type="text"
      id="simple-search"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Type an anime to search"
      required
    />
  );
}

export function AnimeInformationComponent({ index, anime }) {
  return (
    <li key={index} className="bg-red-300 font-semibold my-3 rounded-md">
      <a href="" className="p-2 block">
        {anime}
      </a>
    </li>
  );
}
