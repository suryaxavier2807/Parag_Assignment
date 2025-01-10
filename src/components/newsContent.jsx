import { useEffect } from "react";
import axios from "axios";

export default function NewsContent(props) {
  console.log(props.data, "component new triggered");

  return (
    <div>
      <div className=" p-2 hover:cursor-pointer  ">
        <div className="ml-2 mt-16">
          <div className="flex justify-between border-b-2 border-gray-100">
            <div className=""><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


</div>
<div className="text-xs md:text-xl">Today's News</div>
            <div className="" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</div>
          </div>
          <div className="flex mt-8 border-b-2 border-gray-100">
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
</svg>
</div>
            <div className="text-xs md:text-xl font-medium ml-2">NEWS: Technology</div>
          </div>
        <div className="mt-10">
        <h1 className="text-xl md:text-4xl font-bold mb-2 ">{props.data.title}</h1>
        <p className="text-xs md:text-sm text-gray-600 mt-6">Published at: {props.data.pubDate}</p>
       </div>
       <div className="mt-8 md:mt-14">
       <p className="mt-4 text-xl md:text-2xl">{props.data.description}</p>

       </div>
         
          
          <div className="mt-4 w-full h-full border-b-2 border-gray-100 ">
            <img
              className="w-full h-full object-cover rounded-md"
              src={props.data.image_url}
              alt=""
            />
          </div>
          <div className="mt-16 flex justify-between px-2 ">
            <div className="text-xs font-medium">Follow to get updates on the latest News :- </div>
            <div className="flex justify-end">
               <div className="size-8 md:size-10"><img src="data:image/jpeg;base64,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" alt="" /></div>
            <div className="size-8 md:size-10"><img src="data:image/png;base64,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" alt="" /></div>
            <div className="size-8 md:size-10"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lv-iEOWtRxGDqsOR-Pa1kIiqN298569zVA&s" alt="" /></div>
            
            </div>
           
          </div>
          <div className=" text-center text-2xl mt-14 font-medium ">Thanks for reading!!</div>
        </div>
        
        
      </div>
    </div>
  );
}


