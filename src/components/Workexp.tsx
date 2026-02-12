import { useState } from "react";
import workexpData from "../data/json/workexp.json";

export default function Workexp() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleExperience = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <>
      <div className="h-5" id="workexp"></div>
      <div className="mt-10 flex flex-col items-center gap-10 p-4">
        <h1 className="mb-8 flex items-center justify-center text-3xl">
          WORK EXPERIENCE
        </h1>

        <div className="flex gap-3">
          {workexpData.map((exp) => (
            <div key={exp.id} className="flex flex-col items-center gap-5">
              {/* Image Container */}
              <div
                className="transform overflow-hidden rounded-3xl transition-transform duration-500 hover:scale-105 hover:cursor-pointer border-4 border-[#B78A00]"
                onClick={() => toggleExperience(exp.id)}
              >
                <img
                  src={exp.img}
                  alt={exp.companyName}
                  className="h-40 w-40 object-cover md:w-40"
                />
              </div>

              {/* Description Container */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeId === exp.id
                    ? "max-h-[600px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="mx-auto mt-4 max-w-2xl rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm md:text-left">
                  <h2 className="mb-1 text-center text-2xl font-bold text-[#B78A00]">
                    {exp.companyName}
                  </h2>
                  <h3 className="mb-4 text-center text-lg text-gray-300">
                    {exp.position}
                  </h3>
                  <ul className="flex list-none flex-col items-start gap-2">
                    {exp.bullets.map((act, index) => (
                      <li key={index} className="text-left text-gray-200">
                        • {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
