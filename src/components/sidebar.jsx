

function Sidebar(){
    return(
        <div className="invisible md:visible w-40 h-screen fixed bg-[#1E2640] ">
            <div className="text-white pt-4 pb-2 text-center font-bold text-xl border-b-4  border-r-4 border-white">
                News
            </div>
            <div className="mt-4 ml-2 text-xl hover:bg-gray-700 cursor-pointer rounded-md text-white font-medium">
                Categories
            </div>
            <div className="mt-8 ml-2 mr-2 " >
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md text-white font-medium">BUSINESS</div>
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md text-white font-medium">GENERAL</div>
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md text-white font-medium">HEALTH</div>
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md text-white font-medium">SCIENCE</div>
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md text-white font-medium">SPORTS</div>
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md text-white font-medium">TECHNOLOGY</div>
            </div>
            

        </div>
    )

}

export default Sidebar