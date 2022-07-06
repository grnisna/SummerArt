import Heading from "./components/Heading";
import LeftContent from "./components/LeftContent";
import RightContentImage from "./components/RightContentImage";



function App() {
  return (
    <div className="p-5">
      <Heading></Heading>
      <div className="lg:flex justify-between items-center" >
        <LeftContent></LeftContent>
        <RightContentImage></RightContentImage>
      </div>
    </div>
  );
}

export default App;
