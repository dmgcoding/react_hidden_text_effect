import { useEffect } from "react";
import "./Second.css";

interface Props {}

function Second(props: Props) {
  const {} = props;

  useEffect(() => {
    function onMouseMove(e: any) {
      console.log(e.clientX, e.clientY);
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
    document.documentElement.style.setProperty("--cursor-size", "45px");
  }

  return (
    <>
      <div className="main_page">
        <div className="layer layer-dark">
          <div className="text__container">
            <div>WHO</div>
            <div>WROTE</div>
            <div>THIS</div>
            <div>SHITTY</div>
            <div>CODE?</div>
          </div>
        </div>
        <div className="layer layer-red">
          <div
            className="text__container text-dark"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className=" text-dark">OH</div>
            <div className=" text-dark">WAIT</div>
            <div className=" text-dark">THIS IS</div>
            <div className=" text-dark">MY CODE</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Second;
