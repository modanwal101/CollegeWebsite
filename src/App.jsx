import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Program from "./Components/Programs/Program"
import Title from "./Components/Title/Title"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Testimonials from "./Components/TESTIMONIALS/Testimonials"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"
import { useState } from "react"
function App() {

  const [playState, setPlayState] = useState(false);

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <div className="container">
          <Title subTitle="Our Program" title="What we Offer" />
          <Program></Program>
          <About setPlayState={setPlayState} />
          <Title subTitle="Gallery" title="Campus Photos" />
          <Campus></Campus>
          <Title subTitle="TESTIMONIALS" title="What Student Says" />
          <Testimonials></Testimonials>
          <Title subTitle="Contact Us" title="Get in Touch" />
          <Contact></Contact>
          <Footer></Footer>
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </div>
    </>
  )
}

export default App;
