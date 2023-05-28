import { animes } from "../../database/anime.js";

function Anime() {
  function handlePrint(e){
    console.log(e.target.textContent)
  }

  return (
    <div>
      <ul className="px-4 mt-4">
        {animes.map((anime) => (
          <li className="bg-red-300 font-semibold my-3 rounded-md" key={anime.key}>
            <a onClick={handlePrint} className="p-2 block" href="#">{anime.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function List() {
  return <Anime />;
}
