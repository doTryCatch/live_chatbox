"use client";
import { io } from "socket.io-client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Image from "next/image";
const socket = io("http://localhost:3001");
const color = ["yellow", "blue", "yellow", "orange", "green"];
import Send from "./images/send.png";
import File from "./images/file.png";
var sent = false;

export default function Page() {
  const router = useRouter();
  const brosweRef=useRef(null)
  const [index,setIndex]=useState(0)

  const [news_data, setNews] = useState([{
    title: "",
    content: "",
    img: "",
    url: "",
    date:"",
  }]);
  useEffect(()=>{
    fetch(
      "https://newsdata.io/api/1/news?apikey=pub_2971235970e3d943531bb2e9fc7e1855cbc3b&q=all%20technology%20news%20in%20english"
     ) .then((response) => {
      if (!response.ok) throw new Error("network is not responding!!");
     return response.json(); 
     
    }).then((data)=>{
      const news=data.results
      console.log(news)
      const formattedNews = news.map((elem) => ({
        
        title: elem.title,
        content: elem.description,
        img: elem.image_url,
        url: elem.link,
        date: elem.pubDate,
      }));

      // Update the state with the new array
      setNews(formattedNews);

     
    });
  
  },[])
 


setTimeout(()=>{
  var i=index;
  i<news_data.length-1?i++:i=0
setIndex(i)

// console.log(news_data[index])
},7000)


const Img=news_data[index].img

  const [Msg, setMsg] = useState("");
  const [action, setAction] = useState({
    message: "",
    side: "justify-start",
    color: "bg-white-700",
  });
  const chatContainerRef = useRef(null);
  const { name, room } = router.query;
  socket.emit("join", room);

  const set_value = (e) => {
    setMsg(e.target.value);
  };

  const send = () => {
    socket.emit("send", Msg);
    setAction({ message: Msg, side: "justify-end", color: "bg-green-700" });
    console.log("send", Msg);
  };
  socket.on("receive", (msg) => {
    console.log("receive", msg);
    setAction({ message: msg, side: "justify-start", color: "bg-orange-700" });
  });



  useEffect(() => {
    const board = document.querySelector(".board");

    // Create the parent div element
    const parentDiv = document.createElement("div");
    parentDiv.className = `flex `;
    parentDiv.classList.add(action.side);

    // Create the child div element
    const childDiv = document.createElement("div");
    childDiv.className = `max-w-xs mx-2 my-2 p-3  rounded-lg shadow-md text-white`;
    childDiv.classList.add(action.color);

    // Create the paragraph element
    const paragraph = document.createElement("p");
    paragraph.className = "text-sm text-bold";
    action.message != ""
      ? (paragraph.textContent = action.message)
      : (paragraph.textContent = "welcome to this chat house!!!");

    // Append the paragraph to the child div
    childDiv.appendChild(paragraph);

    // Append the child div to the parent div
    parentDiv.appendChild(childDiv);

    board?.append(parentDiv);
  }, [action]);

  // News apperance from api
 

  return (
    <>
      <section className="container flex md:w-[100rem] w-[25rem] ">
        <div className="chat_area md:w-[70%] w-[100%] ">
          <div className="show_content_area w-[100%] h-[35vh] text-center flex items-center justify-center  ">
            <div className="stroy w-[95%] h-[100%] my-20  font-mono ">
              <h1 className="text-[35px] text-bold text-white">News</h1>
              <div className=" text-white  w-[100%] h-[80%] flex ">
               
                  <div className="img w-[25%] bg-white  shadow-md opacity-70 rounded-lg overflow-hidden">
               <img src={news_data[index].img} alt="" className="scale-[1.5] h-full w-full "/>

           

                   </div>
                  <div className="info w-[75%]">
                    <div className="head text-left mx-4">{news_data[index].title}</div>
                    <hr className="w-[80%] mx-4 my-2"/>
                    <div className="description  text-left mx-4 my-2 text-xs h-20 ">
  <p className="truncate-text" >{news_data[index].content}</p>
  <a href={news_data[index].url} className="text-yellow-600 text-lg">Read More..</a>
</div>

                  </div>
                </div>
            </div>
          </div>
          <div
            className="flex-grow overflow-y-auto px-4 h-[50vh]  w-full board "
            ref={chatContainerRef}
          ></div>

          <div className="type_area  w-[100%] flex items-center justify-center my-8  ">
            <div className="cont flex w-[90%] md:w-[95%]">
              <div className="input w-[80%] md:w-[90%]">
                <input
                  type="text"
                  id="room-id"
                
                  
                  onChange={set_value}
                  className=" input-area text-slate-200  w-[100%]  px-3 py-2 border-b bg-transparent border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Enter Message"
                />
              </div>
          
              <div className="btn w-[20%] text-center  center ">
                <button className="send" onClick={send}>
                  <Image
                    src={Send}
                    alt="My Image"
                    width={25} // Specify the desired width
                    height={20} // Specify the desired height
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
