import { Link, NavLink } from "react-router-dom";

export default function TabComponent() {
  const tabs = [
    { href: "/", name: "Home" },
    { href: "/watching", name: "Viendo" },
    { href: "/favorites", name: "Favoritos" },
    { href: "/later", name: "Ver luego" },
    { href: "/animes", name: "animes" },
  ];

  return (
    <>
      <nav>
        {/* <Link to="/redirect">Redirect</Link> */}
        <ul className="flex justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400 my-2 px-4">
          {tabs.map((tab, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block bg-blue-600 px-3 py-2 text-white rounded-lg hover:text-gray-900 hover:bg-blue-100 dark:hover:bg-gray-800 dark:hover:text-white"
                    : "block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-blue-200 dark:hover:bg-gray-800 dark:hover:text-white"
                }
                to={tab.href}
              >
                {tab.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
