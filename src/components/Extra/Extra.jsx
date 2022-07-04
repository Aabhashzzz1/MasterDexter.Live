import React from "react";
import "./Extra.css";
export function Extra() {
  return (
    <div className="conExtra">
      <div className="colExtra">
        <div className="mainTop">
          <div className="secTop">
            <div className="topA">
              <div className="conA">
                <div className="colA">
                  <div className="bxACard">
                    <div className="bxA">
                      <p className="bxAP">15+</p>
                      <p className="bxAP2">Projects for your profile</p>
                    </div>
                  </div>
                  <div className="bxACard">
                    <div className="bxA">
                      <p className="bxAP">130+</p>
                      <p className="bxAP2">Hours of Live Training</p>
                    </div>
                  </div>
                  <div className="bxACard">
                    <div className="bxA">
                      <p className="bxAP">{`</>`}</p>
                      <p className="bxAP2">Material for coding and Aptitude</p>
                    </div>
                  </div>
                  <div className="bxACard">
                    <div className="bxA">
                      <p className="bxAP">FREE</p>
                      <p className="bxAP2">Community Membership</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col2Extra">
        <div className="colExtra">
          <div className="secDown">
            <div className="downA">
              <p className="downAP">Become a Full Stack Developer in 6 Months 🚀</p>
              <p className="downAP2">
              Learn Code, Build SaaS and get skilled for your next job.
              </p>
            </div>
            <div className="downB">
              <a href="/">
                <button className="downBbtn">
                  Register for Free
                  <svg viewBox="0 0 24 24" class="downBsvg">
                    <path
                      fill="#FFFFFF"
                      fill-rule="evenodd"
                      d="M15.5857864,13 L6,13 C5.44771525,13 5,12.5522847 5,12 C5,11.4477153 5.44771525,11 6,11 L15.5857864,11 L12.2928932,7.70710678 C11.9023689,7.31658249 11.9023689,6.68341751 12.2928932,6.29289322 C12.6834175,5.90236893 13.3165825,5.90236893 13.7071068,6.29289322 L18.7071068,11.2928932 C19.0976311,11.6834175 19.0976311,12.3165825 18.7071068,12.7071068 L13.7071068,17.7071068 C13.3165825,18.0976311 12.6834175,18.0976311 12.2928932,17.7071068 C11.9023689,17.3165825 11.9023689,16.6834175 12.2928932,16.2928932 L15.5857864,13 Z"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
