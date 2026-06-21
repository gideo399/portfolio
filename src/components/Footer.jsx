import github from "../assets/github.png";
import linkedin from "../assets/linkdIn.png";
function Footer() {                

    return(
        <div className="pt-8 md:pt-12 lg:pt-[80px] pb-8 md:pb-12 lg:pb-16">

            {/* Contact Section */}
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-24 text-white mb-8 md:mb-12 lg:mb-16">
                {/* Left Section */}
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-[40px] flex-1">
                    <h1 className="uppercase text-3xl md:text-4xl lg:text-[46px] leading-tight font-bold">
                        Let's connect
                    </h1>

                    <div className="flex flex-col gap-3 md:gap-4 text-sm md:text-base lg:text-[18px]">
                        <p>Say hello at robertgarcia@gmail.com</p>
                        <p>For more information, here is my resume</p>
                    </div>

                    <div className="flex gap-4 md:gap-6 w-fit">
                        <img className="w-8 md:w-8 lg:w-[32px] h-8 md:h-8 lg:h-[32px] cursor-pointer hover:opacity-80 transition" src={github} alt="GitHub" />
                        <img className="w-8 md:w-8 lg:w-[32px] h-8 md:h-8 lg:h-[32px] cursor-pointer hover:opacity-80 transition" src={linkedin} alt="LinkedIn" />
                    </div>

                    <div className="text-xs md:text-sm lg:text-[16px] leading-relaxed pt-4 md:pt-6 lg:pt-8 border-t border-[#484848]">
                        <p>© 2023 Robert Garcia</p>
                    </div>
                </div>

                {/* Right Section - Form */}
                <form className="flex flex-col w-full lg:w-auto gap-4 md:gap-6 lg:gap-[24px] flex-1 lg:max-w-[600px]">

                    {/* Name */}
                    <div className="flex flex-col gap-2 md:gap-3">
                        <label className="text-xs md:text-sm lg:text-base font-semibold">Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full h-12 md:h-13 lg:h-[51px] rounded-[4px] bg-[#1A1A1A] py-2 md:py-3 lg:py-3 px-3 md:px-4 lg:px-4 text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2 md:gap-3">
                        <label className="text-xs md:text-sm lg:text-base font-semibold">Email</label>
                        <input
                            type="email"
                            placeholder="example@email.com"
                            className="w-full h-12 md:h-13 lg:h-[51px] rounded-[4px] bg-[#1A1A1A] py-2 md:py-3 lg:py-3 px-3 md:px-4 lg:px-4 text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
                        />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-2 md:gap-3">
                        <label className="text-xs md:text-sm lg:text-base font-semibold">Subject</label>
                        <input
                            type="text"
                            placeholder="Your subject here"
                            className="w-full h-12 md:h-13 lg:h-[51px] rounded-[4px] bg-[#1A1A1A] py-2 md:py-3 lg:py-3 px-3 md:px-4 lg:px-4 text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
                        />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2 md:gap-3">
                        <label className="text-xs md:text-sm lg:text-base font-semibold">Message</label>
                        <textarea
                            placeholder="Write your message..."
                            rows="4"
                            className="w-full h-32 md:h-40 lg:h-[156px] rounded-[4px] bg-[#1A1A1A] py-2 md:py-3 lg:py-3 px-3 md:px-4 lg:px-4 text-white text-sm md:text-base placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-6 md:px-8 h-12 md:h-13 lg:h-[54px] rounded-[100px] bg-[#D3E97A] text-black font-bold text-sm md:text-base hover:bg-opacity-90 transition mt-2 md:mt-4"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Footer;