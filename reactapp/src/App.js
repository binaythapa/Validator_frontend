import "./App.css";
import tw from "twin.macro";
const Heading = tw.h1`text-red-500 text-2xl p-2`;
const Container = tw.div`max-w-4xl mx-auto p-5 mt-5`;

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline bg-orange-300">
        Hello world!
      </h1>
      <Container>
        <Heading>My custom heading</Heading>
      </Container>
    </div>
  );
}

export default App;
