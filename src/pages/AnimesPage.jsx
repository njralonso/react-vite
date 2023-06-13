import { Link } from "react-router-dom";

export function AnimeRoutes() {
  const animes = [
    { id: "1", name: "Sword Art Online" },
    { id: "2", name: "Yagate Kimi Ni Naru" },
    { id: "3", name: "86 Eighty Six" },
  ];

  return (
    <div>
      <ul>
        {animes.map((animes) => (
          <li key={animes.id}>
            <Link to={`/animes/${animes.name}`}>{animes.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
