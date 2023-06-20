export default function HeaderAnime() {
   return (
      <>
         <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
               <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <a href="https://flowbite.com" className="flex items-center">
                     <img
                        src="https://cdn.onlinewebfonts.com/svg/img_223568.png"
                        className="mr-3 h-6 w-8sm:h-9"
                        alt="Flowbite Logo"
                     />
                     <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Anime App
                     </span>
                  </a>
               </div>
            </nav>
         </header>
      </>
   );
}
