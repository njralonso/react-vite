export default function TabComponent() {
  const tabs = [{"href": "#", "name" :"Viendo"}, {"href": "#", "name" :"Favoritos"},{"href": "#", "name" :"Ver luego"}];

  return (
    <>
      <nav>
        <ul class="flex justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400 my-2 px-4">
          {tabs.map((tab, index) => (
            <li key={index}>
              <a href={tab.href} className="block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">{tab.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
