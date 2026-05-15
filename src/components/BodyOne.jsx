import React from "react";
import profileImg from "../assets/huma.png";
import linkedin from "../assets/linkdIn.png";
import github from "../assets/github.png";

function BodyOne(){
    return(
        <div className=" h-[700px] w-[full] items-center flex gap-[80px] ">

            <div className="  h-[360px] w-[544px] top-[286px] left-[108px] gap-[40px] pb-[22px] ">
                <div className="uppercase text-white text-[62px] weight-[20px]">
                    <h1>hi, i am </h1>
                    <h1> robert garcia.</h1>
                </div>

                <p className="w-[544px] h-[54px text-[18px] text-[#C7C7C7]">
                      A Sydney based front-end developer passionate about building accessible and user friendly websites.</p>

                <div className=" flex items-center gap-[16px] mt-[40px] h-[54px] ">
                     <button className="uppercase w-[187px] h-[54px] flex items-center justify-between px-[24px] bg-[#D3E97A] font-bold text-[16px] rounded-[100px]">
                      Contact Me
                    <div className="w-[10px] h-[10px] rounded-full bg-black" />
                    </button>
                     <img src={linkedin} alt="" className="w-[54px] h-[54px]" />
                    <img src={github} alt="" className="w-[54px] h-[54px]" />

                </div>

            </div>

            <div className=" h-[663px] w-[600px] top-[126px] left-[700px] bg-[#C7C7C7] rounded-2xl ">

                <div className="top-[163px] ">
                   <img src={profileImg} alt="" />
                </div>
              
            </div>
           

        </div>

    
    );
}

export default BodyOne;





