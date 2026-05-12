function Header(props) {
    return(
        <div class="flex justify-between 
         pt-[24px] pr-[60px] pb-[24px]  pl-[24px] 
           bottom-[-1px]  hug-[96px]
            text-white
          " >


        <   div className="text-[32px] h-[148px]
            font-[Bebas Neue] weight-[400px]
            leading-normal tracking-[-1%]
           
        
        ">{props.name}</div>
              
              
            <div className="flex flex-row w-[207px] h-[24px] gap-[32px] "> 
                <span>Work</span>
                <span>About</span>
                <span>Contact</span>
            </div>

        </div>
    );
}

export default Header;