import { useState,useEffect } from "react"
import '../../data'
import data from "../../data"
import NewsContent from "./newsContent";

export default function NewsList(){
    const data1 = data.results
    console.log(data1);

     const [news,setNews] = useState([])
     const [link,setLinkk] = useState("")

     async function handleChange(linktodisplay){
        setLinkk(linktodisplay)

     }

     const [open,setOpen] = useState(false)

     const [state, setstate] = useState({data:"link displayed"})

    const changeState = (val) => {  
       
    
        console.log("function triggered");
        setOpen(true)
        setLinkk(val)

        
        
    }

    console.log(link,"datata");
    
 



    return(
        <div className="flex">
            <div className="mt-4 w-80 ">
            <div>{data1 && data1.map((val,index)=>(
                <div  className="mt-4" key={val.article_id}>
                <div onClick={()=>changeState(val)} className="flex border-2 border-gray-600 rounded-md p-2 hover:cursor-pointer"   >
                <div><img className="object-fill h-48 w-96" src={val.image_url} alt="" /></div>
                <div className="ml-2">
                <p className="font-medium">{val.title}</p>
                <p className="text-xs mt-2">{val.pubDate}</p>
                <p className="mt-4">{val.description}</p>
                <p className="text-xs mt-2">Read more</p>
                </div>
                
            </div> 

                </div>
                
                    
                    
                ))}</div> 
            
            
        </div>
        <div>
            
        </div>
        {open && 
            <NewsContent data = {link}/>
        
        
             }
        
        </div>
        
    )

}

//  <div>{data1 && data1.map((val,index)=>(
//                     <div className="pt-4" key={val.article_id} >TITLE: {val.title}</div>
//                 ))}</div> 

                // ()=>handleChange('https://www.pcgamer.com/hardware/graphics-cards/it-looks-like-amds-expecting-the-rx-9070-xt-to-rival-the-rtx-4070-ti-which-is-fine-if-it-ends-up-being-the-right-price')

            //     useEffect(()=>{

            //         // async function getData(){
            //         //     let datanew = await fetch('https://newsdata.io/api/1/news?apikey=pub_635031f8dfedfcd1866ea8b447113b762127f&language=en&category=technology')
            //         //     console.log(datanew,"new");
            
            //         // }
            //         // getData()
                    
            //     },[])
            // console.log(open,"open");