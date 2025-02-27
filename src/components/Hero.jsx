import React from "react";
import titleImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-cyan-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider capitalize">
            francisco j. cuello
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            full stack developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            professional, dependable, punctual
          </p>
          <div className="mt-4 flex gap-x-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-cyan-900 duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-cyan-900 duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-cyan-900 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={titleImg} alt="title image" className="h-80 lg:h-100" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
