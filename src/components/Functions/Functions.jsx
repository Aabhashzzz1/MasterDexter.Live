import React from "react";
import "./Functions.css";
// import RtImg from "./images/react.svg";
import Atomic from "./images/atomic.svg";
import ThemeSetup from "./images/theme.svg";
import Components from "./images/components.svg";
import Responsive from "./images/responsive.svg";
import Customisation from "./images/customisation.svg";
import IconSystem from "./images/icon.svg";
export function Functions() {
  return (
    <section className="conFun">
      <div className="colFun">
        <div className="mainFun">
          <div className="fun">
            {/* <div className="ltFun">
              <div className="ltSec">
                <div className="rg rg1"></div>
                <div className="rg rg2"></div>
                <div className="rg rg3"></div>
                <div className="rg rg4"></div>
                <button className="ltSecBtn">Sign Up</button>
                <button className="ltSecBtn2">
                  <svg viewBox="0 0 24 24" class="ltSecBtnsvg">
                    <path
                      fill="#FFFFFF"
                      fill-rule="evenodd"
                      d="M11,11 L11,6 C11,5.44771525 11.4477153,5 12,5 C12.5522847,5 13,5.44771525 13,6 L13,11 L18,11 C18.5522847,11 19,11.4477153 19,12 C19,12.5522847 18.5522847,13 18,13 L13,13 L13,18 C13,18.5522847 12.5522847,19 12,19 C11.4477153,19 11,18.5522847 11,18 L11,13 L6,13 C5.44771525,13 5,12.5522847 5,12 C5,11.4477153 5.44771525,11 6,11 L11,11 Z"
                    ></path>
                  </svg>
                </button>
                <svg viewBox="0 0 24 24" class="ltSecsvg">
                  <path
                    fill="#F4541D"
                    d="M5.8458278,2 L18.1541722,2 C19.4914503,2 19.9763797,2.13923842 20.4652686,2.40069906 C20.9541574,2.66215969 21.3378403,3.04584256 21.5993009,3.53473144 C21.8607616,4.02362033 22,4.50854969 22,5.8458278 L22,18.1541722 C22,19.4914503 21.8607616,19.9763797 21.5993009,20.4652686 C21.3378403,20.9541574 20.9541574,21.3378403 20.4652686,21.5993009 C19.9763797,21.8607616 19.4914503,22 18.1541722,22 L5.8458278,22 C4.50854969,22 4.02362033,21.8607616 3.53473144,21.5993009 C3.04584256,21.3378403 2.66215969,20.9541574 2.40069906,20.4652686 C2.13923842,19.9763797 2,19.4914503 2,18.1541722 L2,5.8458278 C2,4.50854969 2.13923842,4.02362033 2.40069906,3.53473144 C2.66215969,3.04584256 3.04584256,2.66215969 3.53473144,2.40069906 C4.02362033,2.13923842 4.50854969,2 5.8458278,2 Z M15.3141427,8.79289322 L10.0212495,14.0857864 L8.20710678,12.2716438 C7.81658249,11.8811195 7.18341751,11.8811195 6.79289322,12.2716438 C6.40236893,12.6621681 6.40236893,13.295333 6.79289322,13.6858573 L9.31414268,16.2071068 C9.70466697,16.5976311 10.3378319,16.5976311 10.7283562,16.2071068 L16.7283562,10.2071068 C17.1188805,9.81658249 17.1188805,9.18341751 16.7283562,8.79289322 C16.3378319,8.40236893 15.704667,8.40236893 15.3141427,8.79289322 Z"
                  ></path>
                </svg>
                <div className="btnsvg">
                    <div className="wtdot"></div>
                </div>
                <div className="ltctr">
                    <img src={RtImg} alt="React" />
                </div>
              </div>
            </div> */}
            <div className="rtFun">
                <div className="rtSec">
                    <h2 className="rtHead">
                        Beautiful &amp; consistant UI powered with&nbsp;
                        <span>React</span>.
                    </h2>
                    <div className="rtSecCon">
                        <div className="rtSecCol">
                            <div className="bxCard">
                                <div className="bx">
                                    <img src={Atomic} alt="Atomic" />
                                    <h3>Atomic</h3>
                                    <p>Based on Atomic Design Methodology.</p>
                                </div>
                            </div>
                            <div className="bxCard">
                                <div className="bx">
                                    <img src={ThemeSetup} alt="Theme Setup" />
                                    <h3>Theme Setup</h3>
                                    <p>Auto updating colors and Styleguide.</p>
                                </div>
                            </div>
                            <div className="bxCard">
                                <div className="bx">
                                    <img src={Components} alt="Components" />
                                    <h3>Components</h3>
                                    <p>Ever-increasing list of components.</p>
                                </div>
                            </div>
                            <div className="bxCard">
                                <div className="bx">
                                    <img src={Responsive} alt="Responsive" />
                                    <h3>Responsive</h3>
                                    <p>Build fully responsive structures easily.</p>
                                </div>
                            </div>
                            <div className="bxCard">
                                <div className="bx">
                                    <img src={Customisation} alt="Customisation" />
                                    <h3>Customisation</h3>
                                    <p>Multiple customisations to suit your style.</p>
                                </div>
                            </div>
                            <div className="bxCard">
                                <div className="bx">
                                    <img src={IconSystem} alt="Icon System" />
                                    <h3>Icon System</h3>
                                    <p>An inbuilt Icon system for faster development.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
