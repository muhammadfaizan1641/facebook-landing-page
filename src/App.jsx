import { Card } from "./Card"
import { Footer } from "./Footer"
import { HeadLine } from "./HeadLine"
import FbIcon from "./icons/fbIcon"

function App() {
  return (
    <div>
      <div className="bg-[#f2f4f7] w-full h-[540px] flex justify-center items-center pb-16"> 
        <div className="pb-24">
        <FbIcon />
        <HeadLine/>
        </div>
        <Card/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
