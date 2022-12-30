import React from "react";
import { Carousel, Button } from "antd";

const items = [
 
  {
    key: "1",
    title: 'Get what you love....',
    content:
      "from the US & UK shipped to Sri Lanka for as low as US23.00",
  }
];

function AppHome() {
  return (
    <div id = "home" className=" cabral">
      <Carousel>
        {items.map(item => {
          return (
            <div className="nesha" key={item.key}>
              <div className="content">
                <h1>{item.title}</h1>
               < p className="achini">{item.content}</p> 
               <div className="btnHolder">
              
            
               </div>
                </div>
            </div>
          );
        })}

      </Carousel>
    </div>
  );
}

export default AppHome;
