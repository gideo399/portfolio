import github from "../assets/github.png";
import linkedin from "../assets/linkdIn.png";

function Footer() {

    return(
        <div className="top-[4159px] left-[108px] h-[771px] flex pt-[80px]  gap-[24px] text-white">

  {/* Left Section */}
  <div className="flex h-[611px] w-[600px] flex-col gap-[40px]">
    <h1 className="uppercase h-[76px] w-[600px] text-[46px] leading-[100%]">Let's connect</h1>

    <div>
      <p className="text-[18px]">Say hello at robertgarcia@gmail.com</p>
      <p className="text-[18px]">For more information, here is my resume</p>
    </div>

    <div className="w-[200px] h-[32px] flex gap-[24px]">
      <img className="w-[32px] h-[32px]" src={github} alt="GitHub" />
      <img className="w-[32px] h-[32px]" src={linkedin} alt="LinkedIn" />
    </div>

    <div className="mt-auto text-[16px] leading-[160%]">
      <p>© 2023 Robert Garcia</p>
    </div>
  </div>

  {/* Right Section - Form */}
  <form className="flex flex-col w-[600px] h-[611px] gap-[24px] pl-[108px]">

    {/* Name */}
    <div className="flex flex-col gap-[8px]">
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="John Doe"
        className="h-[51px] rounded-[4px] w-[600px] bg-[#1A1A1A] py-[12px] px-[16px] text-white"
      />
    </div>

    {/* Email */}
    <div className="flex flex-col gap-[8px]">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="example@email.com"
        className="h-[51px] rounded-[4px] w-[600px] bg-[#1A1A1A] py-[12px] px-[16px] text-white"
      />
    </div>

    {/* Subject */}
    <div className="flex flex-col gap-[8px]">
      <label htmlFor="subject">Subject</label>
      <input
        id="subject"
        type="text"
        placeholder="Your subject here"
        className="h-[51px] rounded-[4px] w-[600px] bg-[#1A1A1A] py-[12px] px-[16px] text-white"
      />
    </div>

    {/* Message */}
    <div className="flex flex-col gap-[8px]">
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        placeholder="Write your message..."
        className="h-[156px] rounded-[4px] w-[600px] bg-[#1A1A1A] py-[12px] px-[16px] text-white resize-none"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-[140px] h-[54px] rounded-[100px] bg-[#D3E97A] text-black font-bold"
    >
      SUBMIT
    </button>
  </form>
</div>





    );
}
export default  Footer ;