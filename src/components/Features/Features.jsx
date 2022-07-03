import React from "react";
import "./Features.css";
// import Grid from "./images/grid.svg";
// import Style from "./images/style.svg";
// import Spacing from "./images/spacing.svg";
// import Responsive from "./images/responsive.svg";
import { TbApi } from "react-icons/tb";
import { BsCreditCard2Front, BsBack, BsClipboardData, BsJournalCode } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import { SiDatabricks } from "react-icons/si";
import { ImMakeGroup } from "react-icons/im";
export function Features() {
  return (
    <section id="features">
      <div className="contain">
        <span className="kFea">Key Features</span>
        <p className="containP">Why Full Stack Engineer?</p>
        <p class="containP2">
          It let you get a full in-depth understanding of how software product
          development works end to end.
        </p>
        <div className="kCon">
          <div className="kCol">
            <div className="kCols">
              <div className="kCons">
                <div className="kCard">
                  <div className="kIcon">
                    {/* <img
                      src={Grid}
                      alt="Frontend"
                      srcset=""
                      className="svgIc"
                    /> */}
                    <BsCreditCard2Front style={{width: "32px", height: "32px"}}/>
                    <p className="kIconP">Frontend</p>
                    <p className="kIconP2">
                      In-depth understanding of HTML, CSS, JavaScript & ReactJS.
                    </p>
                  </div>
                  {/* <a href="/">
                    <p className="aP">See How</p>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="kCols">
              <div className="kCons">
                <div className="kCard">
                  <div className="kIcon">
                    {/* <img
                      src={Style}
                      alt="Product Design"
                      srcset=""
                      className="svgIc"
                    /> */}
                    <MdProductionQuantityLimits style={{width: "32px", height: "30px"}}/>
                    <p className="kIconP">Product Design</p>
                    <p className="kIconP2">
                      Make a grip on Product Design principles.
                    </p>
                  </div>
                  {/* <a href="/">
                    <p className="aP">See How</p>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="kCols">
              <div className="kCons">
                <div className="kCard">
                  <div className="kIcon">
                    {/* <img
                      src={Spacing}
                      alt="Backend"
                      srcset=""
                      className="svgIc"
                    /> */}
                    <BsBack style={{width: "30px", height: "30px"}}/>
                    <p className="kIconP">Backend</p>
                    <p className="kIconP2">
                      Backend development with JavaScript & NodeJS.
                    </p>
                  </div>
                  {/* <a href="/">
                    <p className="aP">See How</p>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="kCols">
              <div className="kCons">
                <div className="kCard">
                  <div className="kIcon">
                    {/* <img
                      src={Responsive}
                      alt="Data Structures"
                      srcset=""
                      className="svgIc"
                    /> */}
                    <BsClipboardData style={{width: "30px", height: "30px"}}/>
                    <p className="kIconP">Data Structures</p>
                    <p className="kIconP2">
                      Coding data structures with JavaScript Core.
                    </p>
                  </div>
                  {/* <a href="/">
                    <p className="aP">See How</p>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="kCol">
            <div className="kCols">
              <div className="kCons">
                <div className="kCard">
                  <div className="kIcon">
                    {/* <img
                      src={Grid}
                      alt="Frontend"
                      srcset=""
                      className="svgIc"
                    /> */}
                    <TbApi style={{width: "32px", height: "32px"}}/>
                    <p className="kIconP">API</p>
                    <p className="kIconP2">
                    Building APIs, Understanding ExpressJS
                    </p>
                  </div>
                  {/* <a href="/">
                    <p className="aP">See How</p>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="kCols">
              <div className="kCons">
                <div className="kCard">
                  <div className="kIcon">
                    {/* <img
                      src={Style}
                      alt="Product Design"
                      srcset=""
                      className="svgIc"
                    /> */}
                    <SiDatabricks style={{width: "32px", height: "32px"}}/>
                    <p className="kIconP">Database</p>
                    <p className="kIconP2">Understanding MongoDB NoSQL.</p>
                  </div>
                  {/* <a href="/">
                    <p className="aP">See How</p>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="kCols">
              <div className="kCons">
                <div className="kCard">
                  <div className="kIcon">
                    {/* <img
                      src={Spacing}
                      alt="Backend"
                      srcset=""
                      className="svgIc"
                    /> */}
                    <BsJournalCode style={{width: "32px", height: "32px"}}/>
                    <p className="kIconP">Aptitude & Coding Rounds</p>
                    <p className="kIconP2">
                      Prepare for Industry written tests.
                    </p>
                  </div>
                  {/* <a href="/">
                    <p className="aP">See How</p>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="kCols">
              <div className="kCons">
                <div className="kCard">
                  <div className="kIcon">
                    {/* <img
                      src={Responsive}
                      alt="Data Structures"
                      srcset=""
                      className="svgIc"
                    /> */}
                    <ImMakeGroup style={{width: "32px", height: "32px"}}/>
                    <p className="kIconP">Group Discussion & Personal Interview</p>
                    <p className="kIconP2">
                      Prepare for Industry GD and PI Rounds.
                    </p>
                  </div>
                  {/* <a href="/">
                    <p className="aP">See How</p>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
