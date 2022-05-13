import React from "react";

import "./style.scss";

const HomeContent = () => {
  return (
    <div className="site-content">
      <main className="site-main container medium">
        <div className="post-content gh-content kg-canvas">
          <h2 id="about">About</h2>
          <p>
            Shou-Li Hsu is a Taiwanese digital circuit designer specialized in
            CPU design and transistor-level VLSI. His background is in mmWave
            IC, cell-based digital IC, and full-custom digital IC.
          </p>
          <p>
            He received his bachelor’s degree at National Taiwan University,
            Taipei, Taiwan, and his master’s degree at University of Michigan,
            Ann Arbor, MI, USA.
          </p>
          <p>
            He worked in MemryX Inc as an integrated circuit engineer intern. He
            was also employed in Tron Future Tech as a digital design engineer
            intern. He is currently employed by Intel as a full-time CPU RTL
            design engineer in Hillsboro, OR, USA.
          </p>

          <h2 id="work">Work Experience</h2>
          <div className="work-item">
            <h3>MemryX Inc</h3>
            <h4>IC Design Intern | May 2021 – Aug. 2021</h4>
            <p>
              Optimized the microarchitecture of the inter-layer communication
              module in an AI chip and achieved 50% area reduction. Integrated
              the AI core, ARM Cortex-M3 processor, and peripherals into an SoC
              and performed chip-level verification.
            </p>
          </div>

          <div className="work-item">
            <h3>Tron Future Tech</h3>
            <h4>Digital Design Intern | June 2020 – Nov. 2020</h4>
            <p>
              Prototyped a communication IP on Xilinx FPGAs and integrated it
              into a transmitter system. Developed single-event upset protection
              mechanisms for SRAM-based FPGAs.
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

          {/* <h2 id="project">Projects</h2> */}
        </div>
      </main>
    </div>
  );
};

export default HomeContent;
