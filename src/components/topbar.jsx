
export default function Topbar(){
    return(
        <div className="bg-[#1E2640] text-white p-2  w-full fixed flex md:block">
            <div className="mt-3 ml-2  md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>

            </div>
            <div className=" transition-all duration-300 text-center pl-28 md:pl-0  pt-2 font-bold text-xl md:text-2xl">THE TIMES OF INDIA</div>
            

        </div>
    )
}
