import testimonials from "../data/json/Testimonials.json";

export default function Testimonials() {
  return (
    <>
      <div className="h-5" id="testimonials"></div>
      <div className="my-20 flex flex-col justify-center text-center">
        {/* Responsive header */}
        <h1 className="text-3xl text-header sm:text-4xl lg:text-5xl">
          TESTIMONIALS
        </h1>
        <p className="sm:text-md mt-2 text-sm lg:text-base">
          Innovative solutions, creative designs, and a passion for excellence
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-10">
          {testimonials.map((el) => (
            <div className="flex max-w-64 flex-col items-center gap-7 rounded-lg border border-gray-200 p-10 shadow-lg sm:w-full sm:flex-col lg:w-1/3">
              {/* Profile Picture */}
              <div className="h-20 w-20 overflow-hidden rounded-full border-[3px] border-header">
                <img src={el.img} alt={el.people} />
              </div>
              {/* Person and Title */}
              <div className="h-24">
                <h1 className="text-2xl text-navbar">{el.people}</h1>
                <h1 className="mt-1 text-[13px]">{el.title}</h1>
              </div>
              {/* Comments */}
              <p className="text-sm">{el.comments}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
