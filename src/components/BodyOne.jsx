function BodyOne(){
    return(
            <div> 
        <div className="   text-white flex  
                             w-[544px] h-[360px]
                             absolute top-[286px] left-[108px] 
                            pb-[22px] gap-[40px]
        
        ">
            <div className="flex flex-col w-[544px] h-[244px] gap-[8px]">
             <h1 className="
                        font-bebas
                        text-[101px]
                        leading-[90%]
                        tracking-[0px]
                        ">
                        HI, I AM 
                        ROBERT GARCIA.
             </h1>
                 <p className="w-[544px] mt-4 text-[18px] leading-[150%] text-gray-300">
      A Sydney based front-end developer passionate about building
      accessible and user friendly websites.
    </p>
            
            <div className="flex items-center gap-6">

        {/* BUTTON */}
        <button
            className="
            flex items-center gap-3
            w-[187px] h-[54px]
            px-6
            bg-[#D3E97A]
            text-black
            rounded-full
            font-semibold
            "
        >
            CONTACT ME

            <img
            className="w-[20px] h-[20px]"
            src="./src/assets/dot.png"
            alt="dot"
            />
        </button>

        
        <div className="flex items-center gap-4">

            <img
            className="w-[26px] h-[26px]"
            src="./src/assets/github.png"
            alt="github"
            />

            <img
            className="w-[26px] h-[26px]"
            src="./src/assets/linkdIn.png"
            alt="linkedin"
            />

     </div>

    </div>
            </div>

        </div>

        <div className="w-[600px] h-[700px] 
        top-[126px] left-[732px] absolute pr-[180px]">
            <img src="./src/assets/huma.png" alt="Human" />
        </div>

            
 </div>

    
    );
}

export default BodyOne;





