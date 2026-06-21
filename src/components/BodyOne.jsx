import profileImg from "../assets/huma.png";
import linkedin from "../assets/linkdIn.png";
import github from "../assets/github.png";

function BodyOne(){
    return(
        <div className="w-full py-8 md:py-16 ">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 gap-[32px]">

                {/* Text Section */}
                <div className="md:w-full  mt-[40px]  flex  flex-col gap- md:gap-8">
                    <div className=" gap-[12px] font-anton text-white  text-[47px] leading-tight ">
                        <h1>HI, I AM </h1>
                        <h1>ROERT GARCIA.</h1>
                    

                    <div className="w-full text-sm md:text-base lg:text-[18px] text-[#C7C7C7] leading-relaxed">
                        A Sydney based front-end developer passionate about building accessible and user friendly websites.
                    </div>
                    </div>

                    <div className="flex flex-row gap-[16px] mt-[32px] ">
                       <button className="w-[163px] md:w-[180px] h-[48px] uppercase px-6 flex items-center justify-between bg-[#D3E97A] font-bold text-[14px] md:text-[16px] rounded-full">
                        <span>Contact Me</span>
                            <div className="w-5 h-5 md:w-3 md:h-3 rounded-full bg-black"></div>
                        </button>
                     
                        <div className="flex gap-4">
                            <img src={linkedin} alt="LinkedIn" className="w-12 md:w-14 lg:w-[54px] h-12 md:h-14 lg:h-[54px] cursor-pointer hover:opacity-80 transition" />
                            <img src={github} alt="GitHub" className="w-12 md:w-14 lg:w-[54px] h-12 md:h-14 lg:h-[54px] cursor-pointer hover:opacity-80 transition" />
                        </div>
                    </div>

                </div>

                {/* Image Section */}
                <div className="w-[343px]  h-[378.86px]  md:w-[600px] md:h-[700px] ">
                    <div className=" bg-[#C7C7C7] rounded-2xl overflow-hidden">
                        <img src={profileImg} alt="Profile"  className="w-[343px]  h-[378.86px]  md:w-[600px] md:h-[603px]" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BodyOne;





