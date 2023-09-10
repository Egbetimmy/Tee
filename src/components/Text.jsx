import Typewriter from "typewriter-effect";
import "../pages/style.css";


function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Exploration Geophysicist",
          "Backend Developer",
          "Frontend Developer",
          "Data Scientist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  )
}

export default Text