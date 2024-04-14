import React from "react";
import aboutImg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutImg} alt="About image" className="w-full h-64" />
        <article>
          <SectionTitle text="about me..." />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nihil
            molestias expedita, quam suscipit dolor explicabo accusantium?
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
