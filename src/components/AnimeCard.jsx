import { Link } from "react-router-dom";

function AnimeCard({ title, image, genres }) {
  return (
    <Link to={`/anime/${title}`}>
      <div className="h-24 flex my-2 py-2 px-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-md" src={image} alt={title} />
        <div className="flex flex-col justify-between">
          <p className="px-4 text-sm font-semibold text-gray-900 dark:text-white">
            {title}
          </p>
          <p className="px-4 text-xs">{genres.join(", ")}</p>
        </div>
      </div>
    </Link>
  );
}

export default AnimeCard;
