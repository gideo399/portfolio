import Header from "./components/Header"
import BodyOne from "./components/BodyOne"
import BodyTwo from "./components/BodyTwo"
import Footer from "./components/Footer"


function App() {


  return (
     <> 
              <Header name="Robert Garcia" />
            <div className="px-4 md:px-[108px] px-[18px] "> 
            
            
               <BodyOne/> 
              
              
              {/* <Medium/> */}
              {/* <Footer /> */}


              
              </div>
               <div className=" px-[18px]">
                <BodyTwo/> 
               </div>

          </>
)
}
export default App
