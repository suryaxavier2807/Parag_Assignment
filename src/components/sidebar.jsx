

function Sidebar(){
    return(
        <div className="w-20 md:w-40 h-full fixed bg-[#1E2640] ">
            <div className="text-white pt-4 pb-2 text-center font-bold text-xl border-b-4  border-r-4 border-white">
                News
            </div>
            <div className="mt-4 ml-2 text-white text-xs md:text-xl md:font-medium">
                Categories
            </div>
            <div className="mt-8 ml-2 mr-2 " >
                <div className="text-xs md:px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md text-white md:font-medium md:text-base">BUSINESS</div>
                <div className=" text-xs   md:px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md text-white md:font-medium md:text-base">GENERAL</div>
                <div className=" text-xs   md:px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md text-white md:font-medium md:text-base">HEALTH</div>
                <div className=" text-xs   md:px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md text-white md:font-medium md:text-base">SCIENCE</div>
                <div className=" text-xs   md:px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md text-white md:font-medium md:text-base">SPORTS</div>
                <div className=" text-xs   md:px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md text-white md:font-medium md:text-base">TECHNOLOGY</div>
            </div>
            

        </div>
    )

}

export default Sidebar