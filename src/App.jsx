import Header from "./components/Header"
import BodyOne from "./components/BodyOne"
import BodyTwo from "./components/BodyTwo"
import Medium from "./components/Medium"
import Footer from "./components/Footer"


function App() {


  return (
     <> 
              <Header name="Robert Garcia" />
            <div className="px-[108px] "> 
            
            
              <BodyOne/>
              
              <BodyTwo/>
              {/* <Medium/> */}
              <Footer />


              
              </div>

          </>
)
}
export default App
