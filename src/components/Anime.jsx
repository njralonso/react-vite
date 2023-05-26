export default function Anime(props) {
  return (
    <div>
      <ul class="flex flex-col divide-y divide-gray-200 dark:divide-gray-700 px-4 mt-8">
        <li class="pb-3 sm:pb-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8 rounded-full"
                src="https://m.media-amazon.com/images/I/91Vdq6ZlvgL.jpg"
                alt="Neil image"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                {props.name}
              </p>
              <div class="text-sm text-gray-500 truncate dark:text-gray-400">
                <kbd class="mr-2 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                  Mecha
                </kbd>
                <kbd class="mr-2 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                  Romance
                </kbd>
                <kbd class="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                  Acción
                </kbd>
              </div>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              E24. 2T
            </div>
            <div class="flex items-center justify-center">
              <div class="bg-yellow-500 text-white p-4 font-bold w-4 h-4 rounded-full flex items-center justify-center cursor-pointer">
                ❗
              </div>
            </div>
          </div>
        </li>
        {/* <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8 rounded-full"
                src="http://placekitten.com/g/200/300"
                alt="Neil image"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                Darling In The Franxx
              </p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                email@flowbite.com
              </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $3467
            </div>
            <div class="flex items-center justify-center">
              <div class="bg-yellow-500 text-white p-4 font-bold w-4 h-4 rounded-full flex items-center justify-center cursor-pointer">
                ❗
              </div>
            </div>
          </div>
        </li> */}
      </ul>
    </div>
  );
}
