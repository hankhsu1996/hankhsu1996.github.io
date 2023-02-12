import React from "react";

import "./style.scss";

const HomeContent = () => {
  return (
    <div className="site-content">
      <main className="site-main">
        <div className="post-content gh-content kg-canvas">
          <h2 id="about">About</h2>
          <p>
            Shou-Li Hsu is a highly skilled digital circuit designer from
            Taiwan, specializing in CPU design and transistor-level VLSI. With a
            strong background in mmWave IC, cell-based digital IC, and
            full-custom digital IC, he is well-equipped to handle complex
            circuit design challenges.
          </p>
          <p>
            Shou-Li received his bachelor's degree from National Taiwan
            University in Taipei, Taiwan in 2019, and went on to complete his
            master's degree at the University of Michigan in Ann Arbor, MI, USA
            in 2022.
          </p>
          <p>
            Throughout his academic career, Shou-Li has gained valuable industry
            experience working as an integrated circuit engineer intern at
            MemryX Inc, and as a digital design engineer intern at Tron Future
            Tech. He is currently a full-time CPU RTL design engineer at Intel's
            Hillsboro, OR, USA location, where he continues to hone his skills
            and contribute to the advancement of cutting-edge circuit design
            technology.
          </p>

          <h2 id="work">Work Experience</h2>
          <div className="work-item">
            <h3>Intel Corporation</h3>
            <h4>CPU RTL Design Engineer | June 2022 – Present</h4>
            <p>
              As a microarchitect, I was responsible for contributing to the
              design and implementation of the L1 cache and load store unit
              microarchitecture of an x86 CPU. Working collaboratively with a
              team of designers and engineers, I utilized my expertise in CPU
              design and advanced design software to create a high-performance
              and efficient microarchitecture that met the required
              specifications. My contributions to the project helped to ensure
              its success and contributed to the overall advancement of x86 CPU
              technology.
            </p>
          </div>

          <div className="work-item">
            <h3>MemryX Inc</h3>
            <h4>IC Design Intern | May 2021 – Aug. 2021</h4>
            <p>
              As an IC design intern at MemryX, I optimized the inter-layer
              communication module in an AI chip, achieving a 50% area
              reduction. I also integrated the AI core, ARM Cortex-M3 processor,
              and peripherals into an SoC and performed chip-level verification,
              contributing to the advancement of cutting-edge IC design
              technology.
            </p>
          </div>

          <div className="work-item">
            <h3>Tron Future Tech</h3>
            <h4>Digital Design Intern | June 2020 – Nov. 2020</h4>
            <p>
              As a Digital Design Intern at Tron Future Tech, I played a key
              role in prototyping a communication IP on Xilinx FPGAs and
              integrating it into a transmitter system. In addition, I developed
              single-event upset protection mechanisms for SRAM-based FPGAs,
              utilizing my knowledge of design principles and advanced tools to
              optimize system reliability and robustness. Through my
              contributions, I helped to advance FPGA technology and gain
              valuable industry experience.
            </p>
          </div>

          <h2 id="education">Education</h2>
          <div className="education-item">
            <h3>University of Michigan</h3>
            <h4>Ann Arbor, MI, USA | Sept. 2020 – Apr. 2022</h4>
            <p>M.S. majoring in Electrical and Computer Engineering.</p>
          </div>

          <div className="education-item">
            <h3>National Taiwan University</h3>
            <h4>Taipei, Taiwan | Sept. 2014 – June 2019</h4>
            <p>
              B.S. double majoring in Electrical Engineering and Mechanical
              Engineering.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeContent;
