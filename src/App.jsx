import "./App.css";

/* COMPONENTS */
import Title from "./components/Title";
import InputDirectionBox from "./components/InputDirectionBox";
import InformationContainer from "./components/InformationContainer";

function App() {
  return (
    <div className="App">
      <Title />
      <InputDirectionBox />
      <InformationContainer />
    </div>
  );
}

export default App;
