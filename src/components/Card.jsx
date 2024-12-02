import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover, title, heading }) {
  return (
    <div
      className={`bg-zinc-800 p-6 rounded-md font-[Satoshi] ${width} min-w-[30rem] flex flex-col justify-between ${
        hover ? "hover:pl-10 hover:pr-10 hover:bg-purple-500" : ""
      } transition-all duration-500 ease-in-out box-border`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h4>{title}</h4>
          <IoIosArrowRoundForward className="text-2xl" />
        </div>
        <h1 className="text-4xl font-extralight mt-6">
          {Array.isArray(heading) // Check if heading is an array
            ? heading.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < heading.length - 1 && <br />}{" "}
                  {/* Add <br> except for the last line */}
                </React.Fragment>
              ))
            : heading}
        </h1>
      </div>
      <div className="down w-full mt-32">
        {start && (
          <>
            <h1 className="text-8xl font-medium tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full px-6 py-2 border mt-6">
              Contact us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-400 font-medium">
            Explore what drives our team.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
