import adventure from "../assets/adventure.png";
import github from "../assets/github.png";
import sneaker from "../assets/sneaker.png";
import newspaper from "../assets/newspaper.png";

function BodyTwo() {
  return (
    <div className="flex flex-col w-full   pt-[80px]  gap-[80px] ">

      {/* Heading Section */}
      <div className="flex flex-col gap-[8px] text-white">
        <p className="text-[40px] font-bold">
          FEATURED PROJECTS
        </p>

        <p className="text-[18px] max-w-[600px]">
          Here are some of the selected projects that showcase my passion for front-end development.
        </p>
      </div>

      {/* Project Card */}
      <div className="flex gap-[48px]">

        {/* Left Side */}
        <div className=" w-[600px] h-[600px] bg-[#1A1A1A] rounded-[24px] flex flex-col ">

          {/* Tag */}
          <div className=" mt-[16px] ml-[16px] bg-black rounded flex-col px-[16px] py-[8px] max-w-[145px]">
            <p className="text-white text-[14px]">
              Conceptual Work
            </p>
          </div>

          {/* Image */}
          <div className="w-[486px] h-[347px] bg-grey-600 px-[57px] py-[127px]  top-[126px] ">
          <img
            className="w-[486px] h-[347px]    rounded-[12px]"
            src={adventure}
            alt="Adventure project"/>
            </div>
          
        </div>

        {/* Right Side */}
        <div className="w-[600px] h-[600px]  rounded-[24px]  ">

         <div className="w-[574px] h-[480px]  mt-[60px]  flex flex-col gap-[32px] ">

            <h1 className="w-[576px] h-[90px] text-[32px] text-white  "> Promotional landing page for our  favorite show</h1>
            <p  className="w-[576px] h-[90px] text-[18px] leading-[150%] text-[#C7C7C7]">Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
            {/* border    */}
            <div className="h-[156px] w-[576px]   flex flex-col text-[#C7C7C7] " > 
               <p className="uppercase text-[16px] leading-[150%] pb-[16px] border-b border-[#484848] ">Project Info</p>
               <div className=" flex justify-between  w-[576px] h-[58px] top-[1px] pt-[16px] pb-[#484848] border-b border-[#484848]   " > 
                  <span>Year</span>
                  <span>2025</span>
               </div> 
               <div className="flex justify-between  w-[576px] h-[58px] top-[1px] pt-[16px] pb-[16px] border-b border-[#484848]  ">
                  <span>Role</span>
                  <span>Frontend Developer</span>
               </div>
            </div>

             <div className="flex  gap-[24px]  ">
              <div className="flex text-[#D3E97A] border-b border-[#D3E97A] "> <p>LIVE DEMO <img src="" alt="" /></p>  <img src="" alt="" /> </div>

              <div className="flex text-[#D3E97A] border-b border-[#D3E97A] "><p>SEE ON GITHUB</p>  <img className="h-[21.6px] w-[21.6px] " src= {github} alt="" /></div>
               

             </div>

         </div>
         
          
        </div>

      </div>
       {/* the second bar of the site  */}
       <div className="flex gap-[48px]">

        {/* Left Side */}
        <div className=" w-[600px] h-[600px] bg-[#1A1A1A] rounded-[24px] p-[24px]">

          {/* Tag */}
         

          {/* Image */}
          <img
            className="w-[486px] h-[347px] mt-[126px] pl-[57px] pr-[57px]  mb-[127px] rounded-[12px]"
            src={newspaper}
            alt="Adventure project"
          />
        </div>

        {/* Right Side */}
        <div className="w-[600px] h-[600px]  rounded-[24px]  ">

         <div className="w-[574px] h-[480px]  mt-[60px]  flex flex-col gap-[32px] ">

            <h1 className="w-[576px] h-[90px] text-[32px] text-white  "> Promotional landing page for our  favorite show</h1>
            <p  className="w-[576px] h-[90px] text-[18px] leading-[150%] text-[#C7C7C7]">Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
            {/* border    */}
            <div className="h-[156px] w-[576px]   flex flex-col text-[#C7C7C7] " > 
               <p className="uppercase text-[16px] leading-[150%] pb-[16px] border-b border-[#484848] ">Project Info</p>
               <div className=" flex justify-between  w-[576px] h-[58px] top-[1px] pt-[16px] pb-[#484848] border-b border-[#484848]   " > 
                  <span>Year</span>
                  <span>2025</span>
               </div> 
               <div className="flex justify-between  w-[576px] h-[58px] top-[1px] pt-[16px] pb-[16px] border-b border-[#484848]  ">
                  <span>Role</span>
                  <span>Frontend Developer</span>
               </div>
            </div>

             <div className="flex  gap-[24px]  ">
              <div className="flex text-[#D3E97A] border-b border-[#D3E97A] "> <p>LIVE DEMO <img src="" alt="" /></p>  <img src="" alt="" /> </div>

              <div className="flex text-[#D3E97A] border-b border-[#D3E97A] "><p>SEE ON GITHUB</p>  <img className="h-[21.6px] w-[21.6px] " src= {github} alt="" /></div>
               

             </div>

         </div>


         
         
          
        </div>

      </div>

       <div className="flex gap-[48px]">

        {/* Left Side */}
        <div className=" w-[600px] h-[600px] bg-[#1A1A1A] rounded-[24px] p-[24px]">

          {/* Tag */}
          <div className=" mt-[16px] ml-[16px] bg-black rounded-full px-[16px] py-[8px] max-w-[145px]">
            <p className="text-white text-[14px]">
              challenge
            </p>
          </div>

          {/* Image */}
          <img
            className="w-[486px] h-[347px] mt-[126px] pl-[57px] pr-[57px]  mb-[127px] rounded-[12px]"
            src={sneaker}
            alt="Adventure project"
          />
        </div>

        {/* Right Side */}
        <div className="w-[600px] h-[600px]  rounded-[24px]  ">

         <div className="w-[574px] h-[480px]  mt-[60px]  flex flex-col gap-[32px] ">

            <h1 className="w-[576px] h-[90px] text-[32px] text-white  "> Promotional landing page for our  favorite show</h1>
            <p  className="w-[576px] h-[90px] text-[18px] leading-[150%] text-[#C7C7C7]">Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
            {/* border    */}
            <div className="h-[156px] w-[576px]   flex flex-col text-[#C7C7C7] " > 
               <p className="uppercase text-[16px] leading-[150%] pb-[16px] border-b border-[#484848] ">Project Info</p>
               <div className=" flex justify-between  w-[576px] h-[58px] top-[1px] pt-[16px] pb-[#484848] border-b border-[#484848]   " > 
                  <span>Year</span>
                  <span>2025</span>
               </div> 
               <div className="flex justify-between  w-[576px] h-[58px] top-[1px] pt-[16px] pb-[16px] border-b border-[#484848]  ">
                  <span>Role</span>
                  <span>Frontend Developer</span>
               </div>
            </div>

             <div className="flex  gap-[24px]  ">
              <div className="flex text-[#D3E97A] border-b border-[#D3E97A] "> <p>LIVE DEMO <img src="" alt="" /></p>  <img src="" alt="" /> </div>

              <div className="flex text-[#D3E97A] border-b border-[#D3E97A] "><p>SEE ON GITHUB</p>  <img className="h-[21.6px] w-[21.6px] " src= {github} alt="" /></div>
               

             </div>

         </div>
         
          
        </div>

      </div>
      
       


  </div>
  );
}

export default BodyTwo;

/* Vector */