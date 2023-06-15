import { NavLink } from "react-router-dom";

export default function Header() {
  const menuTop = [
    { href: "/", name: "Home" },
    { href: "/watching", name: "Viendo" },
    { href: "/favorites", name: "Favoritos" },
    { href: "/later", name: "Ver luego" },
    // { href: "/animes", name: "animes" },
  ];

  return (
    <>
      <header>
        <nav className="bg-green-200 w-full ">
          {/* <Link to="/redirect">Redirect</Link> */}
          <ul className="flex justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-2 p-4">
            {menuTop.map((menuTop, index) => (
              <li key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "block bg-blue-600 px-3 py-2 text-white rounded-lg hover:text-gray-900 hover:bg-blue-100 dark:hover:bg-gray-800 dark:hover:text-white"
                      : "block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-blue-200 dark:hover:bg-gray-800 dark:hover:text-white"
                  }
                  to={menuTop.href}
                >
                  {menuTop.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
