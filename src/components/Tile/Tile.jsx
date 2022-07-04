import React from "react";
import { SiFuturelearn } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { TbMoodCrazyHappy } from "react-icons/tb";
import { GiFireplace } from "react-icons/gi";
import { IoMdPaperPlane } from "react-icons/io";
import Placement from "./images/placement.png";

import "./Tile.css";
export function Tile() {
  return (
    <div className="conTile">
      <div className="col2Tile">
        <div className="colTile">
          <div className="sec">
            <div className="down">
              <p className="downTile lrn">
                <SiFuturelearn style={{width: "30px", height: "30px",color: '#f6f7f8'}}/> &nbsp;
                Learn & Prepare
              </p>
              <p className="downTile bld">
                <CgProfile style={{width: "32px", height: "32px",color: '#f6f7f8'}}/> &nbsp;
                Build Profile
              </p>
              <p className="downTile crk">
                <TbMoodCrazyHappy style={{width: "32px", height: "32px",color: '#f6f7f8'}}/> &nbsp;
                Crack Interview
              </p>
            </div>
            <div className="down2">
                <IoMdPaperPlane style={{width: "300px", height: "300px",color: '#f6f7f8'}}/>
                {/* <img src={Placement} alt="Placement" srcset="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
