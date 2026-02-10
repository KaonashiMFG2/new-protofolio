import { useState } from "react";
// import workexpData from "../data/json/workexp.json";
import jetro from "/workexp/jetro.jpg";

export default function Workexp() {
  const [showExperience, setShowExperience] = useState(false);

  return (
    <>
      <div className="h-5" id="workexp"></div>
      <div className="mt-10 p-4">
        <h1 className="flex items-center justify-center">WORK EXPERIENCE</h1>

        {/* {workexpData.map((el) => (
          <div className="text-center">
            <h1 className="text-2xl">{el.companyName}</h1>
            <h2 className="text-md italic">{el.position}</h2>
            <img src={el.img} alt={el.companyName} />
          </div>
        ))} */}

        {/* JETRO Section */}
        <div className="mt-5 flex flex-col items-center gap-5">
          {/* Image Container */}
          <div
            className="transform overflow-hidden rounded-3xl transition-transform duration-500 hover:animate-pulse hover:cursor-pointer"
            onClick={() => setShowExperience(!showExperience)}
          >
            <img src={jetro} alt="JETRO" className="w-40 md:w-40" />
          </div>

          {/* Description Container */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              showExperience ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-4 text-center md:text-left">
              <h1 className="m-3 text-lg">Staff for JETRO Survey Project</h1>
              <ul className="flex flex-col items-start gap-2">
                <li>
                  • Engaged with Japanese companies to encourage survey
                  participation and ensure representation.
                </li>
                <li>
                  • Managed data entry for survey responses into the JETRO
                  database using MS Excel and MS Access.
                </li>
                <li>
                  • Coordinated with Indonesian expatriate facilities
                  (apartments, hotels, schools, industrial parks) to gather
                  essential relocation information.
                </li>
              </ul>
            </div>
            -
          </div>
        </div>
      </div>
    </>
  );
}
