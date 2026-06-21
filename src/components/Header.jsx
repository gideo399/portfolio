function Header() {
    return(
       <div className=" md:w-full border-b border-gray-700 text-white md:py-4 md:px-15  py-[24px] px-4">
            <div className="flex justify-between items-center">
                <div className="uppercase leading-[150%]  md:text-[27px] text-[24px] font-bold">
                    <h1>robert garcia</h1>
                </div>

                <nav className="hidden md:flex gap-6 lg:gap-8  text-sm md:text-base">
                    <span className="hover:text-[#D3E97A] cursor-pointer transition">Work</span>
                    <span className="hover:text-[#D3E97A] cursor-pointer transition">About</span>
                    <span className="hover:text-[#D3E97A] cursor-pointer transition">Contact</span>
                </nav>

                <button className="md:hidden ">☰</button>
            </div>
       </div>
    );
}

export default Header;