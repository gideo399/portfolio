function Header(props) {
    return(
       <div className="h-[96px] flex w-full top-[24px] right-[60px] bottom-[24px] left-[60px] border-b-[1px] text-white justify-between  items-center p-[15">

            <div className="uppercase  leading-[150%] text-[32px] left-[1234px] right-[60px] top-[24px] ">
                <h1>robert garcia</h1>
            </div>

            <div className="h-[24px] w-[207px]   flex gap-[32px] right-[60px] top-[36px] left-[1173px] items-center ">
                <span>Work</span>
                <span>About</span>
                <span>Contact</span>
            </div>

        

       </div>
    );
}

export default Header;