import tools from "../data/json/Tools.json";
import projects from "../data/json/Projects.json";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Skills() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="h-10" id="skills"></div>
      <div className="m-10 flex flex-col items-center justify-center gap-7 rounded-full bg-boxColor p-20">
        <h1 className="-mt-10 mb-2 text-3xl">TOOLS</h1>

        <div className="w-full max-w-4xl">
          <Slider {...settings}>
            {tools.map((el) => (
              <div className="flex flex-col items-center justify-center gap-3 text-center">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={el.img}
                    alt={el.name}
                    className="mb-2 h-16 w-16 object-contain"
                  />
                  <span className="text-sm text-white">{el.name}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="m-20 p-3 max-xl:m-0 max-xl:p-0">
        <div className="bg-secondBoxColor p-7">
          <h1>PROJECTS</h1>
          <p>I have done some projects, such as ...</p>
        </div>
        {projects.map((el) => (
          <div className="mt-10 grid grid-cols-2 items-center justify-center gap-10 max-xl:grid-cols-1 max-xl:p-10">
            <a href={el.link} className="overflow-hidden rounded-xl">
              <img
              src={el.img}
              alt={el.projectName}
              className="max-h-60 w-full object-cover"
              />
            </a>
            <div className="flex w-[100%] flex-col gap-3">
              <h1 className="text-4xl text-navbar">{el.projectName}</h1>
              <h1 className="text-sm">{el.intro}</h1>
              <p>{el.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
