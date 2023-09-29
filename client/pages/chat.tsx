"use client";
import { io } from "socket.io-client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Send from "./images/send.png";


const socket = io("http://localhost:3001");
const color = ["yellow", "blue", "yellow", "orange", "green"];
var sent = false;

export default function Page() {
  const route=useRouter()
  const handle_About=()=>{
    route.push({pathname:"/aboutme"})
  }
  const get_current_time=()=>{
    const time=new Date();
    let hour=time.getHours()
    let minutes=time.getMinutes()
    let amPm=hour>=12?"PM":"AM"
    hour=hour>12? hour-12: hour
    let min=minutes<10? "0"+minutes:minutes
    return `${hour}:${min} ${amPm}`
  }
  const router = useRouter();
  const brosweRef = useRef(null);
  const [index, setIndex] = useState(0);

  const [news_data, setNews] = useState([
    {
      title: "",
      content: "",
      img: "",
      url: "",
      date: ""
      
    },
  ]);

  const [Msg, setMsg] = useState("");
  const [action, setAction] = useState({
    message: "",
    side: "justify-start",
    color: "bg-white-700",
    name:""
  });

  const chatContainerRef = useRef(null);
  const { name, room } = router.query;

  useEffect(() => {
    fetchNewsData();
  }, []);
  setTimeout(() => {
    var i = index;
    i < news_data.length - 1 ? i++ : (i = 0);
    setIndex(i);

    // console.log(news_data[index])
  }, 7000);

  useEffect(() => {
    // Socket.io logic for joining a room and receiving messages
    socket.emit("join", {name,room});

    socket.on("receive", (msg) => {
      console.log("receive", msg);
      setAction({ message: msg.message, side: "justify-start", color: "bg-orange-800" ,name:msg.name});
    });

    return () => {
      // Clean up the socket connection when the component unmounts
      socket.disconnect();
    };
  }, [room]);

  const set_value = (e) => {
    setMsg(e.target.value);
  };

  const send = () => {
    socket.emit("send", Msg);
    setAction({ message: Msg, side: "justify-end", color: "bg-green-800",name:"you" });
    console.log("send", Msg);
  };

  // Fetch news data from the API
  const fetchNewsData = () => {
    fetch(
      "https://newsdata.io/api/1/news?apikey=pub_2971235970e3d943531bb2e9fc7e1855cbc3b&q=all%20technology%20news%20in%20english"
    )
      .then((response) => {
        if (!response.ok) throw new Error("Network is not responding!!");
        return response.json();
      })
      .then((data) => {
        const news = data.results;
        const formattedNews = news.map((elem) => ({
          title: elem.title,
          content: elem.description,
          img: elem.image_url,
          url: elem.link,
          date: elem.pubDate,
        }));
        setNews(formattedNews);
      })
      .catch((error) => {
        console.error('Error fetching news data:', error);
      });
  };

  useEffect(() => {
    const board = document.querySelector(".board");

    // Create the parent div element
    const parentDiv = document.createElement("div");
    parentDiv.className = `flex `;
    parentDiv.classList.add(action.side);

    // Create the child div element
    const childDiv = document.createElement("div");
    childDiv.className = `max-w-xs mx-2 my-2 p-3  rounded-lg shadow-md text-white space-y-2`;
    childDiv.classList.add(action.color);
     // Create the child div element for sender or receiver name counter
     const childDiv2 = document.createElement("div");
     childDiv2.className = ` justify-end min-w-[90px] flex space-x-4 text-black`;
    //  childDiv2.classList.add(action.side);
     const para = document.createElement("p");
     para.className = "text-[11px] text-bold";
     para.textContent = action.name
     const time = document.createElement("p");
     time.className = "text-[11px] text-bold";
     time.textContent = get_current_time()
     childDiv2.append(para) 
     childDiv2.append(time)
 
   

    // Create the paragraph element
    const paragraph = document.createElement("p");
    paragraph.className = "text-sm text-bold";
    action.message != ""
      ? (paragraph.textContent = action.message)
      : (paragraph.textContent = "Welcome to this chat house!!!");

    // Append the paragraph to the child div
    childDiv.appendChild(paragraph);
    childDiv.append(childDiv2)

    // Append the child div to the parent div
    parentDiv.appendChild(childDiv);

    board?.append(parentDiv);
  }, [action]);

  // News appearance from API

  return (
    <>
      <section className="container md:w-[100rem] w-[25rem] ">
        <div className="chat_area md:w-[70%] w-[100%] ">
          <div className="show_content_area w-[100%] h-[35vh] text-center ">
            <div className="about w-[60%] flex items-center justify-between">
              <div className="aboutme ml-5 -mt-10 md:-mt-2 md:-ml-40 center">
                <button className="text-white" onClick={handle_About}>About Me</button>
              </div>
              <div className="head center">
                <h1 className="text-[25px] text-bold text-white">News</h1>
              </div>
            </div>
            <div className="news w-[95%] h-[80%] center ">
              <div className="text-white w-[100%] md:h-[100%] center h-[100%] flex">
                <div className="img w-[45%] md:w-[35%] md:h-[90%] h-[70%]  flex items-center justify-center ml-5 shadow-md opacity-70 rounded-lg overflow-hidden">
                  <img
                    src={news_data[index].img}
                    alt=""
                    className="scale-[1.8] h-full w-full  "
                  />
                </div>
                <div className="info w-[65%] md:w-[75%]">
                  <div className="head text-left mx-4 max-h-[24%] md:max-h-[28%] text-sm md:text-lg overflow-hidden truncate-text">
                    {news_data[index].title}
                  </div>
                  <hr className="w-[80%] mx-4 my-2" />
                  <div className="description text-left mx-4 my-2 text-[10px] md:text-[12px] h-20 ">
                    <p className="truncate-text">{news_data[index].content}</p>
                    <a
                      href={news_data[index].url}
                      className="text-yellow-600 text-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More..
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow overflow-y-auto px-4 h-[45vh] w-full board" ref={chatContainerRef}></div>

          <div className="type_area w-[100%] flex items-center justify-center my-8  ">
            <div className="cont flex w-[90%] md:w-[95%]">
              <div className="input w-[80%] md:w-[90%]">
                <input
                  type="text"
                  id="room-id"
                  onChange={set_value}
                  className="input-area text-slate-200 w-[100%] px-3 py-2 border-b bg-transparent border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Enter Message"
                />
              </div>

              <div className="btn w-[20%] text-center center ">
                <button className="send" onClick={send}>
                  <Image src={Send} alt="My Image" width={25} height={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
