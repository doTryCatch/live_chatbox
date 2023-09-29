import React from 'react';
import Image from 'next/image';
import data from "./jsonfile/about.json"
import Profile from "./images/profile.jpeg"


const Resume = () => {
  const { personal_information, education, programming_languages, web_development, hobbies, additional_info } = data;

  
  return (
    <div className="about center text-slate-500">
    <div className="p-4 rounded-lg shadow-lg  w-[80%]">
      <div className="text-center">
      
        <Image
          src={Profile}// Add the path to your image
          alt="Profile"
          className="w-32 h-32 profile rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-semibold mr-5">{personal_information.name}</h1>
        <p className="text-[15px] md:text-lg">{personal_information.location}</p>
        <p className="text-[15px] md:text-lg">{personal_information.email}</p>
        <p className="text-[15px] md:text-lg">{personal_information.phone}</p>
        <p className="text-[15px] md:text-lg">{personal_information.whatsapp}</p>
        <div className="links center space-x-4 my-2">
        <p>
          <a
            href={personal_information.linkedin}
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href={personal_information.github}
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        </p>
        <p>
          <a
            href={personal_information.website}
            className="text-blue-500 hover:underline"
          >
            Personal
          </a>
        </p>
        </div>
      
      </div>

      {/* ... Rest of the resume content */}
      <div className="my-8">
        <h2 className="text-lg md:text-xl font-semibold">Education</h2>
        <p className="text-[15px] md:text-lg">{education.university}</p>
        <p className="text-[15px] md:text-lg">{education.degree_status}</p>
        <p className="text-[15px] md:text-lg">{education.university_details.name}</p>
      </div>

      <div className="my-8">
        <h2 className="text-lg md:text-xl font-semibold">Programming Languages</h2>
        <p className="text-[15px] md:text-lg">{programming_languages}</p>
      </div>

      <div className="my-8">
        <h2 className="text-lg md:text-xl font-semibold">Web Development</h2>
        <p className="text-[15px] md:text-lg">{web_development.front_end}</p>
        <p className="text-[15px] md:text-lg">{web_development.back_end}</p>
        <p className="text-[15px] md:text-lg">{web_development.databases}</p>
      </div>

      <div className="my-8">
        <h2 className="md:text-xl font-semibold">Hobbies</h2>
        <p className="text-[15px] md:text-lg">{hobbies.outdoor_games}</p>
        <p className="text-[15px] md:text-lg">{hobbies.indoor_games}</p>
      </div>

      <div className="my-8">
        <h2 className="text-lg md:text-xl font-semibold">Additional Info</h2>
        <p className="text-[15px] md:text-lg">{additional_info.interests}</p>
        <p className="text-[15px] md:text-lg">{additional_info.why_programming}</p>
      </div>
    </div>
    </div>
  );
};

export default Resume;
