

export default function NavBar(){
    return (
        <nav className="fixed w-full z-20 top-0 start-0 border-b bg-white items-center justify-between mx-auto p-4 border-gray-500 flex flex-wrap px-32">
            <div className="w-12 h-10 py-1">
               <img src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="logo"></img>
            </div>
            <div className="relative">
                <button type="submit" className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer hover:bg-blue-100 hover:border hover:border-gray-500 rounded-lg w-10"> 
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
                </button>
              <input type="search" className="w-96 py-2 ps-10 text-sm text-black border border-gray-500 rounded-lg focus:ring-blue-700 focus:border-blue-700" placeholder="Search..." required>
              
              </input>
            </div>
            <div className="flex flex-col items-start mt-3 gap-2 sm:flex-row sm:m-0">
             <button type="submit" className="w-28 py-1 gap-3 text-center px-2 rounded-md hover:bg-gray-400 hover:underline font-serif">Log in</button>
             <button type="submit" className="w-44  py-1 gap-3 text-center text-blue-950 px-2 rounded border border-blue-900 hover:bg-blue-950 hover:text-white font-serif hover:underline">Create account</button>
            </div>
        </nav>
    )
}