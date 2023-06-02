import { useEffect } from "react";
import "./App.css";

interface Props {}

function App(props: Props) {
  const {} = props;

  useEffect(() => {
    function onMouseMove(e: any) {
      document.documentElement.style.setProperty(
        "--cursor-x",
        e.clientX + "px"
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        e.clientY + "px"
      );
    }
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  function onMouseEnter() {
    document.documentElement.style.setProperty("--cursor-size", "350px");
  }

  function onMouseLeave() {
    document.documentElement.style.setProperty("--cursor-size", "32px");
  }

  return (
    <>
      <div className="main_page">
        <div className="layer dark_layer">
          <div
            className="text_container"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div>WHO</div>
            <div>WROTE</div>
            <div>THIS</div>
            <div>SHITTY</div>
            <div>CODE?</div>
          </div>
        </div>
        <div className="layer layer_red">
          <div className="text_container text_black">
            <div>OH</div>
            <div>WAIT!</div>
            <div>THIS IS</div>
            <div>MY</div>
            <div>CODE?</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
