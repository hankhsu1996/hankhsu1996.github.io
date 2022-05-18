import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./projects.scss";

const posts = [
  {
    title: "Desktop Laser Engraver",
    excerpt:
      "A lightweight desktop laser engraver made with Arduino Mega and 3D-printed parts. The firmware is adopted from the Marlin firmware.",
    date: "2017-08-31",
    tag: "Robot",
    img_src: "https://source.unsplash.com/ekK_kGLeTQA",
    link: "",
  },
  {
    title: "Hexapod Robot Gait Development",
    excerpt:
      "An undergrads research project on the development of a hexapod robot gait. The new flip-and-jump gait allows the robot to jump over obstacles.",
    date: "2018-07-31",
    tag: "Robot",
    img_src: "https://source.unsplash.com/GNk9IAiIvrg",
    link: "",
  },
  {
    title: "FountainScape Drawing Robot",
    excerpt:
      "A 2-Dimensional numerical control drawing robot. The robot is capable of drawing SVG files and features an easy-to-use web interface.",
    date: "2018-06-30",
    tag: "Robot",
    img_src: "https://source.unsplash.com/l3N9Q27zULw",
    link: "",
  },
  {
    title: "Ka-Band IQ Mixer in GaAs Process",
    excerpt:
      "A Ka-band IQ mixer based on GaAs pHEMT process which aims to reduce the image noise in the ngVLA radio telescope. The chip is taped-out in Jan. 2020.",
    date: "2019-07-31",
    tag: "Analog",
    img_src: "https://source.unsplash.com/fsH1KjbdjE8",
    link: "",
  },
  {
    title: "AES Algorithm Hardware Accelerator",
    excerpt:
      "A hardware accelerator for the Advanced Encryption Standard algorithm. The accelerator supports ECB and CBC modes, and is taped-out in UMC 0.18 process.",
    date: "2019-06-30",
    tag: "Digital",
    img_src: "https://source.unsplash.com/BcjdbyKWquw",
    link: "",
  },
  {
    title: "Classic Five-Stage RISC-V Processor",
    excerpt:
      "A classic five-stage pipelined RISC-V RV32I processor with data forwarding unit. Implemented in SystemVerilog and synthesized with Design Compiler.",
    date: "2020-11-30",
    tag: "Digital",
    img_src: "https://source.unsplash.com/d21CGQKtJh8",
    link: "",
  },
  {
    title: "Superscalar Dynamically-Scheduled RISC-V Processor",
    excerpt:
      "A two-way superscalar, dynamically-scheduled RISC-V processor with MIPS R10000 style register renaming written in SystemVerilog. Ranked 1st in the class.",
    date: "2020-12-31",
    tag: "Digital",
    img_src: "https://source.unsplash.com/RBthQZJd_vU",
    link: "",
  },
  {
    title: "Full-Custom Layout RISC Processor",
    excerpt:
      "A RISC processor with a full-custom register file, ALU and barrel shifter. The schematics and layouts are designed in Cadence Virtuoso.",
    date: "2021-4-20",
    tag: "Digital",
    img_src: "https://source.unsplash.com/M0yAcynJr6M",
    link: "",
  },
  {
    title: "MOESI Cache-Coherence Protocol Verification",
    excerpt:
      "A formal verification of the MOESI cache-coherence protocol implemented in Murphi model checker.",
    date: "2021-3-31",
    tag: "Digital",
    img_src: "https://source.unsplash.com/eaDwf4UAEhk",
    link: "",
  },
  {
    title: "Snake Language Compiler",
    excerpt:
      "A compiler for the snake language written in Rust. It realizes the register allocation algorithm and first-class function support.",
    date: "2021-12-10",
    tag: "Software",
    img_src: "https://source.unsplash.com/BfrQnKBulYQ",
    link: "",
  },
  {
    title: "Soft-Decision Decoder for Turbo Product Code",
    excerpt:
      "A soft-decision decoder for the turbo product code and staircase code forward error correction. The decoder is implemented in SystemVerilog.",
    date: "2021-12-15",
    tag: "Digital",
    img_src: "https://source.unsplash.com/FnA5pAzqhMM",
    link: "",
  },
  {
    title: "Side-Channel Attack Resistant AES SoC",
    excerpt:
      "A power side-channel attack resistant AES SoC with a stacked-voltage domain backend design. The backend features a digital LDO and a special level shifter.",
    date: "2022-04-20",
    tag: "Digital",
    img_src: "https://source.unsplash.com/t2fKRcKF3fw",
    link: "",
  },
  {
    title: "Radio Receiver Design",
    excerpt:
      "A radio receiver design including a 1.8 GHz low-noise amplifier, a Gilbert cell mixer and a 1.7 GHz voltage-controlled resonant oscillator in IBM 130 process.",
    date: "2022-04-30",
    tag: "Analog",
    img_src: "https://source.unsplash.com/tkE5nutsKt8",
    link: "",
  },
  {
    title: "Personal Website",
    excerpt:
      "A single-page application personal website built with React and Webpack and hosted on GitHub Pages.",
    date: "2022-05-19",
    tag: "Software",
    img_src: "https://source.unsplash.com/7okkFhxrxNw",
    link: "",
  },
];

const Post = (props) => {
  const { title, excerpt, date, tag, img_src, link } = props.data;

  return (
    <article className="post tag-technology post-5de7372693b6f9268a18b569">
      <div className="post-media js-play">
        <div className="u-placeholder square">
          <img
            className="post-image u-object-fit lazyautosizes ls-is-cached lazyloaded"
            src={img_src}
            alt={title}
          />
        </div>
      </div>
      <div className="post-wrapper">
        <header className="post-header">
          <h2 className="post-title">
            <Link className="post-title-link" to={link}>
              {title}
            </Link>
          </h2>
          <div className="post-meta">
            <span className="post-meta-item post-meta-date">
              <time dateTime={date}>
                {new Date(date).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </span>
            <span className="post-meta-item post-meta-tags">
              <Link
                className="post-tag post-tag-technology"
                to={`/tag/${tag.toLowerCase()}`}
                title={tag}
              >
                {tag}
              </Link>
            </span>
          </div>
        </header>
        <div className="post-excerpt">{excerpt}</div>
        <footer className="post-footer">
          <Link className="button-text post-footer-more" to={link}>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="icon icon-chevron-right"
            />
            Read more NYI
          </Link>
        </footer>
      </div>
    </article>
  );
};

const Projects = () => {
  const params = useParams();
  let termName, termDescription;
  let _posts;
  if (params.tag) {
    termName = `Tag: ${params.tag}`;
    termDescription = `All projects tagged with ${params.tag}`;
    _posts = posts.filter((post) => post.tag.toLowerCase() === params.tag);
  } else {
    termName = "Projects";
    termDescription = "Here are some of the projects I've worked on.";
    _posts = posts;
  }
  return (
    <>
      <Header />
      <div className="site-content">
        <div className="content-area">
          <main className="site-main container medium">
            <section className="term">
              <h1 className="term-name">{termName}</h1>
              <div className="term-description">{termDescription}</div>
            </section>
            <div className="post-feed">
              {_posts
                .sort((a, b) => {
                  return new Date(b.date) - new Date(a.date);
                })
                .map((post) => {
                  return <Post data={post} key={post.title} />;
                })}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
