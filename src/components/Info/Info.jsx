import React from "react";
import "./Info.css";
import Design from "./images/design.svg";
import ReactImg from "./images/react.svg";
export function Info() {
  return (
    <section className="conInfo">
      <div className="colInfo">
        <div className="mainInfo">
          <div className="infoSecA">
            <h2>
            Building a strong social media personal profile.
            </h2>
          </div>
          <div className="infoSecB">
            <div className="secB">
              <div className="secLt">
                <div className="ltInfo">
                  <img src={Design} alt="Design" />
                  <p className="InfoP">Major Projects</p>
                  <p class="InfoP2">
                    Design your website by using Atomize for Sketch App.
                  </p>
                  <a href="/">
                    Projects Details
                    <svg viewBox="0 0 24 24" class="InfoAsvg">
                      <path
                        fill="#0284FE"
                        fill-rule="evenodd"
                        d="M15.5857864,13 L6,13 C5.44771525,13 5,12.5522847 5,12 C5,11.4477153 5.44771525,11 6,11 L15.5857864,11 L12.2928932,7.70710678 C11.9023689,7.31658249 11.9023689,6.68341751 12.2928932,6.29289322 C12.6834175,5.90236893 13.3165825,5.90236893 13.7071068,6.29289322 L18.7071068,11.2928932 C19.0976311,11.6834175 19.0976311,12.3165825 18.7071068,12.7071068 L13.7071068,17.7071068 C13.3165825,18.0976311 12.6834175,18.0976311 12.2928932,17.7071068 C11.9023689,17.3165825 11.9023689,16.6834175 12.2928932,16.2928932 L15.5857864,13 Z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="secLt secRt">
                  <div className="ltInfo rtInfo">
                    <img src={ReactImg} alt="React" />
                    <p className="InfoP">Work on Live Projects</p>
                    <p class="InfoP2">
                    Bring your designs to life with Atomize for React JS.
                  </p>
                  <a href="/">
                    Live Projects
                    <svg viewBox="0 0 24 24" class="InfoAsvg">
                      <path
                        fill="#0284FE"
                        fill-rule="evenodd"
                        d="M15.5857864,13 L6,13 C5.44771525,13 5,12.5522847 5,12 C5,11.4477153 5.44771525,11 6,11 L15.5857864,11 L12.2928932,7.70710678 C11.9023689,7.31658249 11.9023689,6.68341751 12.2928932,6.29289322 C12.6834175,5.90236893 13.3165825,5.90236893 13.7071068,6.29289322 L18.7071068,11.2928932 C19.0976311,11.6834175 19.0976311,12.3165825 18.7071068,12.7071068 L13.7071068,17.7071068 C13.3165825,18.0976311 12.6834175,18.0976311 12.2928932,17.7071068 C11.9023689,17.3165825 11.9023689,16.6834175 12.2928932,16.2928932 L15.5857864,13 Z"
                      ></path>
                    </svg>
                  </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
