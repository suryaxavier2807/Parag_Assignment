import { useState,useEffect } from "react"
import '../../data'
import data from "../../data"
import NewsContent from "./newsContent";

export default function NewsList(){

    
    const data1 = data.results

     const [link,setLinkk] = useState("")

     const [open,setOpen] = useState(false)

     const [selectedId, setSelectedId] = useState(null);

    const changeState = (val) => {  
        setOpen(true)
        setLinkk(val)
        setSelectedId(val.article_id);
    }

    

    return(
        <div className="flex ">
            <div className={`p-4 mt-10 border-r border-gray-300  transition-all duration-300 ${
          open ? "md:w-1/3" : "md:w-2/3 md:mx-auto"
        } w-full`}>
            <div>{data1 && data1.map((val,index)=>(
                <div  className="mt-4" key={val.article_id}>
                <div onClick={()=>changeState(val)} className={`md:flex border-2 border-gray-600 ${
                  selectedId === val.article_id
                    ? "bg-gray-200 border-gray-400 "
                    : "border-gray-600"
                }rounded-md md:p-2 hover:cursor-pointer`}  >
                <div><img className="object-fill h-20  md:h-48 w-full" src={val.image_url} alt="" /></div>
                <div className="ml-2">
                <p className="text-xs md:text-xl mt-1 md:mt-0 font-medium">{val.title}</p>
                <p className="text-xs mt-2">{val.pubDate}</p>
                <p className="text-xs mt-2 md:mt-4">{val.description}</p>
                </div>
                
            </div> 

                </div>
                
                    
                    
                ))}</div> 
            
            
        </div>
        <div className={`flex-1 p-4 ${!open && "hidden"}`}>
        {open && 
            <NewsContent data = {link} />
        
        
             }
            
        </div>
        
        
        </div>
        
    )

}

