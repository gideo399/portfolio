import Header from "./components/Header"
import BodyOne from "./components/BodyOne"
import BodyTwo from "./components/BodyTwo"
import Footer from "./components/Footer"


function App() {


  return (
     <> 
              <Header name="Robert Garcia" />
            <div className="px-[108px] "> 
            
            
              <BodyOne/>
              
              <BodyTwo/>
              <Footer/>
              </div>

          </>
)
}
export default App
