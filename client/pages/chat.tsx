'use client'
import {io} from "socket.io-client"
import React,{ useState,useEffect ,useRef} from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Image from "next/image";
const socket = io("http://localhost:3001");
const color=["yellow","blue","yellow","orange","green"]
import Send from "./images/send.png"
import File from "./images/file.png"
var sent=false


export default function Page() {
  const router=useRouter()
  
  const [Msg,setMsg]=useState('');
  const [action,setAction]=useState({message:"",side:"justify-start",color:"bg-white-700"})
  const chatContainerRef = useRef(null);
  const {name,room}=router.query;
  socket.emit('join',room);
  
  const set_value=(e)=>{
    setMsg(e.target.value)

  }
  // const scrollToBottom = () => {
  //   if (chatContainerRef.current) {
  //     const val = chatContainerRef.current.scrollHeight*1.2;
  //     chatContainerRef.current.scrollTop=val

  //   }
   
  // };
  
  const send=()=>{
    
    // scrollToBottom()
    socket.emit("send",Msg)
    setAction({message:Msg,side:"justify-end",color:"bg-green-700"})
    console.log("send",Msg)
    document.querySelector('.board')?.innerHTML
   

  }
  socket.on("receive",(msg)=>{
console.log("receive",msg)
setAction({message:msg,side:"justify-start",color:"bg-orange-700"})
  })
  //listen enter pressed for send message 
  // useEffect(()=>{
  //   document.addEventListener("keydown",(e)=>{
  
  //     if(e.code=="Enter"){
      
  //         sent=true;
        
  //     }
  //       })
      
  // },[1])
  // if (sent){
  //   send();
  //   sent=false;
  // }
  
  useEffect(()=>{
    const board=document.querySelector('.board');


// Create the parent div element
const parentDiv = document.createElement('div');
parentDiv.className = `flex `;
parentDiv.classList.add(action.side)

// Create the child div element
const childDiv = document.createElement('div');
childDiv.className = `max-w-xs mx-2 my-2 p-3  rounded-lg shadow-md text-white`;
childDiv.classList.add(action.color);

// Create the paragraph element
const paragraph = document.createElement('p');
paragraph.className = 'text-sm text-bold';
action.message!=""?paragraph.textContent = action.message: paragraph.textContent="welcome to this chat house!!!"

// Append the paragraph to the child div
childDiv.appendChild(paragraph);

// Append the child div to the parent div
parentDiv.appendChild(childDiv);



    board?.append(parentDiv)
  },[action])
  // stroy apperance..
  const [storyText, setStoryText] = useState('');
  const storySentences = [
    "Once upon a time, in a faraway land,",
    "there lived a brave and adventurous explorer.",
    "This explorer embarked on a journey to discover",
    "hidden treasures and unravel ancient mysteries.",
    "Their path was filled with challenges and surprises,",
    "but they never gave up on their quest.",
    "And so, their incredible adventure continued..."
  ];


  useEffect(() => {
    const fullStory = storySentences.join(' '); // Combine all sentences into one text
    const typingInterval = 100; // Adjust typing speed (in milliseconds)
    let charIndex = 0;

    const typeNextCharacter = () => {
      if (charIndex < fullStory.length-1) {
        setStoryText(prevText => prevText + fullStory[charIndex]);
        charIndex++;
        setTimeout(typeNextCharacter, typingInterval);
      }else{
        setTimeout(() => {
          setStoryText('Finished..!!')
        }, 1000);
        
      }
    };

    typeNextCharacter();

  }, []);

  return <>
  <section className="container flex md:w-[100rem] w-[25rem] ">
 
  <div className="chat_area md:w-[70%] w-[100%] ">
    <div className="show_content_area w-[100%] h-[35vh] text-center flex items-center justify-center ">
      <div className="stroy w-[85%] my-10  overflow-y-auto font-mono ">
      <p className=" text-white font-bold text-sm ">{storyText}</p>
      </div>
   

    </div>
  <div className="flex-grow overflow-y-auto px-4 h-[50vh]  w-full board " ref={chatContainerRef}>
   
</div>


    <div className="type_area  w-[100%] flex items-center justify-center my-8  ">
      <div className="cont flex w-[90%] md:w-[95%]">
    <div className="input w-[80%] md:w-[90%]">
            <input type="text" id="room-id" onChange={set_value} className="text-slate-200  w-[100%]  px-3 py-2 border-b bg-transparent border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter Message"/>
            </div>
            <div className="file center w-[10%]  ">
              <button>
              <Image
          src={File}
        alt="My Image"
        width={25} // Specify the desired width
        height={20} // Specify the desired height
      />
              </button>
            </div>
            <div className="btn w-[10%] text-center  center ">

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
}