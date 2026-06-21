import adventure from "../assets/adventure.png";
import github from "../assets/github.png";
import sneaker from "../assets/sneaker.png";
import newspaper from "../assets/newspaper.png";

function BodyTwo() {
  return (
    <div className="flex flex-col  md:px-[80px] gap-[64px] md:gap-[80px] ">

      {/* Heading Section */}
      <div className="flex flex-col  gap-3 md:gap-4 text-white">
        <p className="text-2xl md:text-3xl lg:text-[40px] font-bold">
          FEATURED PROJECTS
        </p>
        <p className="text-sm md:text-base lg:text-[18px] max-w-full md:max-w-xl lg:max-w-[600px] text-[#C7C7C7]">
          Here are some of the selected projects that showcase my passion for front-end development.
        </p>
      </div>

     {/* card 1 */} 
      <div className=" h-[343px] md:h-[600px] flex flex-col md:flex-row gap-[40px] md:gap-[48px] border-b-1 "> 
        <div className="w-[343px] h-[343px] md:w-[600px] md:h-[600px] bg-[#1A1A1A] ">
            <div className="text-white text-xs md:text-[14px] h-[37px] w-[145px] bg-[#1A1A1A] rounded-[100px] px-[16px] py-[8px] ">
              Conceptual Work
            </div>
           
            <div className="flex justify-center top-[128px]"> 
             <img src={adventure}  className="w-[486px] h-[347px]   md:my-[128px] md:mx-[57px] rounded-[12px] object-cover   " alt="" />
          
         
          </div>
        </div>

         {/* Right Side - Content */}
        <div className=" md:w-[600px] flex flex-col justify-center gap-4 md:gap-6 ">
          <h1 className="text-2xl md:text-3xl  text-white leading-snug">
            Promotional landing page for our favorite show
          </h1>
          <p className="text-sm md:text-base  leading-relaxed text-[#C7C7C7]">
            Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.
          </p>
          
          {/* Project Info */}
          <div className="flex flex-col gap-4 text-xs md:text-sm text-[#C7C7C7] border-t border-[#484848] pt-4">
            <p className="uppercase font-semibold">Project Info</p>
            <div className="flex justify-between border-b border-[#484848] pb-3">
              <span>Year</span>
              <span>2025</span>
            </div>
            <div className="flex justify-between pb-3">
              <span>Role</span>
              <span>Frontend Developer</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4 text-[#D3E97A] text-sm md:text-base">
            <a href="#" className="flex items-center gap-2 border-b border-[#D3E97A] pb-1 hover:opacity-80 transition">
              LIVE DEMO
            </a>
            <a href="#" className="flex items-center gap-2 border-b border-[#D3E97A] pb-1 hover:opacity-80 transition">
              SEE ON GITHUB
              <img src={github} alt="GitHub" className="w-4 md:w-5 h-4 md:h-5" />
            </a>
          </div>
        </div>





      </div>

      {/* Project Card 2 */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[48px]">
        {/* Left Side - Image */}
        <div className="w-full lg:w-[600px] h-64 sm:h-96 md:h-[500px] lg:h-[600px] bg-[#1A1A1A] rounded-[24px] flex items-center justify-center flex-shrink-0 p-4 md:p-6">
          <img
            className="w-full h-full object-cover rounded-[12px]"
            src={newspaper}
            alt="newspaper"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[600px] flex flex-col justify-center gap-4 md:gap-6 lg:gap-[32px]">
          <h1 className="text-2xl md:text-3xl lg:text-[32px] text-white leading-snug">
            Promotional landing page for our favorite show
          </h1>
          <p className="text-sm md:text-base lg:text-[18px] leading-relaxed text-[#C7C7C7]">
            Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.
          </p>
          
          {/* Project Info */}
          <div className="flex flex-col gap-4 text-xs md:text-sm lg:text-[16px] text-[#C7C7C7] border-t border-[#484848] pt-4">
            <p className="uppercase font-semibold">Project Info</p>
            <div className="flex justify-between border-b border-[#484848] pb-3">
              <span>Year</span>
              <span>2025</span>
            </div>
            <div className="flex justify-between pb-3">
              <span>Role</span>
              <span>Frontend Developer</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4 text-[#D3E97A] text-sm md:text-base">
            <a href="#" className="flex items-center gap-2 border-b border-[#D3E97A] pb-1 hover:opacity-80 transition">
              LIVE DEMO
            </a>
            <a href="#" className="flex items-center gap-2 border-b border-[#D3E97A] pb-1 hover:opacity-80 transition">
              SEE ON GITHUB
              <img src={github} alt="GitHub" className="w-4 md:w-5 h-4 md:h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Project Card 3 */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[48px]">
        {/* Left Side - Image */}
        <div className="w-full lg:w-[600px] h-64 sm:h-96 md:h-[500px] lg:h-[600px] bg-[#1A1A1A] rounded-[24px] flex flex-col flex-shrink-0">
          <div className="mt-4 ml-4 bg-black rounded-full px-3 md:px-4 py-2 w-fit">
            <p className="text-white text-xs md:text-[14px]">
              Challenge
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center p-4 md:p-6">
            <img
              className="w-full h-full object-cover rounded-[12px]"
              src={sneaker}
              alt="Adventure project"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[600px] flex flex-col justify-center gap-4 md:gap-6 lg:gap-[32px]">
          <h1 className="text-2xl md:text-3xl lg:text-[32px] text-white leading-snug">
            E-commerce product page
          </h1>
          <p className="text-sm md:text-base lg:text-[18px] leading-relaxed text-[#C7C7C7]">
            Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.
          </p>
          
          {/* Project Info */}
          <div className="flex flex-col gap-4 text-xs md:text-sm lg:text-[16px] text-[#C7C7C7] border-t border-[#484848] pt-4">
            <p className="uppercase font-semibold">Project Info</p>
            <div className="flex justify-between border-b border-[#484848] pb-3">
              <span>Year</span>
              <span>2025</span>
            </div>
            <div className="flex justify-between pb-3">
              <span>Role</span>
              <span>Frontend Developer</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4 text-[#D3E97A] text-sm md:text-base">
            <a href="#" className="flex items-center gap-2 border-b border-[#D3E97A] pb-1 hover:opacity-80 transition">
              LIVE DEMO
            </a>
            <a href="#" className="flex items-center gap-2 border-b border-[#D3E97A] pb-1 hover:opacity-80 transition">
              SEE ON GITHUB
              <img src={github} alt="GitHub" className="w-4 md:w-5 h-4 md:h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[80px] text-white py-8 md:py-12 lg:py-8 border-t border-[#484848]">
        <div className="w-full lg:w-auto">
          <h1 className="text-4xl md:text-5xl lg:text-[50px] uppercase leading-tight font-bold">About Me</h1>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 lg:gap-[48px] flex-1">
          <h2 className="text-xl md:text-2xl lg:text-[27px] text-white leading-relaxed">
            I am a front-end developer based in Sydney. Has Mechanical Engineering background.
          </h2>

          <p className="text-sm md:text-base lg:text-[15px] leading-relaxed text-[#C7C7C7]">
            I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
          </p>
        </div>
      </div>

    </div>
  );
}

export default BodyTwo;
