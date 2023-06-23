import { NavLink } from "react-router-dom";

export default function Header() {
  const menuTop = [
    { href: "/", name: "Home" },
    // { href: "/watching", name: "Viendo" },
    { href: "/favorites", name: "Favoritos" },
    // { href: "/later", name: "Ver luego" },
    // { href: "/animes", name: "animes" },
  ];

  return (
    <>
      <header>
        <nav className="flex justify-between bg-indigo-400 w-full mb-2 p-4">
          <div className="h-min">MyAnimeSite</div>
          <ul className="flex justify-center text-xs font-medium text-center">
            {menuTop.map((menuTop, index) => (
              <li key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "block bg-blue-600 px-3 py-2 text-white rounded-lg hover:text-gray-900 hover:bg-blue-100 dark:hover:bg-gray-800 dark:hover:text-white"
                      : "block text-white px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-blue-200 dark:hover:bg-gray-800 dark:hover:text-white"
                  }
                  to={menuTop.href}
                >
                  {menuTop.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div><button>Login</button></div>
        </nav>
      </header>
    </>
  );
}
