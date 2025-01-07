import { useEffect } from "react";
import axios from "axios";

export default function NewsContent(props) {
  console.log(props.data, "component new triggered");

  return (
    <div>
      <div
        onClick={() => changeState(val)}
        className=" p-2 hover:cursor-pointer h-full w-140  "
      >
        <div className="ml-2 mt-16">
          <p className="font-medium text-xl">{props.data.title}</p>
          <p className="text-xs mt-2">{props.data.pubDate}</p>
          <p className="mt-4">{props.data.description}</p>
          <div className="mt-4">
            <img
              className="object-fill h-48 w-96"
              src={props.data.image_url}
              alt=""
            />
          </div>
          <div className="mt-8"> Countries available: 'united kingdom', 'australia', 'canada', 'united states of america</div>
          <div className=",t-8">CATEGORY: TECHNOLOGY</div>
        </div>
      </div>
    </div>
  );
}

// return(
//     <div className="bg-green-300 flex" >
//         <div>
//             da

//         </div>

//     </div>

// )
