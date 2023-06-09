import "./App.css";
import Hero from "./components/hero/Hero";

interface Props {}

function App(props: Props) {
  const {} = props;

  return (
    <>
      <div>
        <Hero />
      </div>
    </>
  );
}

export default App;
