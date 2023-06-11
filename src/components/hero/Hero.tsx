import { useEffect, useState } from "react";
import "./Hero.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

interface Props {}

gsap.registerPlugin(ScrollTrigger);

function Hero(props: Props) {
  const {} = props;

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function onMouseMove(e: any) {
      setMousePos({ x: e.clientX, y: e.clientY });
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

  function onHeroMouseEnter() {
    document.documentElement.style.setProperty("--cursor-size", "350px");
  }

  function onHeroMouseLeave() {
    document.documentElement.style.setProperty("--cursor-size", "32px");
  }

  function onMenuItemMouseEnter(item: string) {
    document.documentElement.style.setProperty("--cursor-size", "0px");
    gsap.to(item, {
      color: "rgb(177, 167, 134)",
      duration: 0.5,
      transitionTimingFunction: "ease-in-out",
      transform: "translateY(-140%)",
    });
  }

  function onMenuItemMouseLeave(item: string) {
    document.documentElement.style.setProperty("--cursor-size", "32px");
    gsap.to(item, {
      transitionTimingFunction: "ease-in-out",
      transform: "translateY(0%)",
      duration: 0.5,
      color: "rgb(218, 211, 185)",
    });
  }

  function onMLogoMouseEnter() {
    // console.log(mousePos); //75,75 = 0,0
    document.documentElement.style.setProperty("--cursor-size", "40px");
    gsap.to(".logo", {
      transitionTimingFunction: "ease",
      duration: 0.2,
      x: mousePos.x - 65,
      y: mousePos.y - 75,
    });
  }

  function onLogoMouseLeave() {
    document.documentElement.style.setProperty("--cursor-size", "32px");
    gsap.to(".logo", {
      transitionTimingFunction: "ease",
      duration: 0.2,
      x: 0,
      y: 0,
    });
  }

  // let st = ScrollTrigger.create({
  //   trigger: ".space2",
  //   scroller: ".space2", // if no scroller is defined, the viewport (window) is used.
  //   start: "top center",
  //   end: "+=500",
  // });

  // get
  // let scrlPos = st.scroll();

  gsap.utils.toArray(".about_me_container > div").forEach((target: any) => {
    gsap.to(target, {
      backgroundPositionX: 0,
      ease: "power1.out",
      duration: 0.1,
      scrollTrigger: {
        trigger: target,
        scrub: 1,
        markers: false,
        start: "-200vh center",
        end: "-200vh center",
      },
    });
  });

  return (
    <>
      <div className="main_page">
        <div className="layer dark_layer">
          <div className="header">
            <div
              className="logo_container"
              // onMouseEnter={onMLogoMouseEnter}
              onMouseLeave={onLogoMouseLeave}
              onMouseMove={onMLogoMouseEnter}
            >
              <img
                src="./src/assets/logo_white.png"
                className="logo"
                alt="dmgcoding"
              />
            </div>
            <div className="header__menu">
              <div
                className="textbox"
                onMouseEnter={() => {
                  onMenuItemMouseEnter("#menu_item_about");
                }}
                onMouseLeave={() => {
                  onMenuItemMouseLeave("#menu_item_about");
                }}
              >
                <span id="menu_item_about">about</span>
                <span id="menu_item_about">about</span>
              </div>
              <div
                className="textbox"
                onMouseEnter={() => {
                  onMenuItemMouseEnter("#menu_item_work");
                }}
                onMouseLeave={() => {
                  onMenuItemMouseLeave("#menu_item_work");
                }}
              >
                <span id="menu_item_work">work</span>
                <span id="menu_item_work">work</span>
              </div>
              <div
                className="textbox"
                onMouseEnter={() => {
                  onMenuItemMouseEnter("#menu_item_contact");
                }}
                onMouseLeave={() => {
                  onMenuItemMouseLeave("#menu_item_contact");
                }}
              >
                <span id="menu_item_contact">contact</span>
                <span id="menu_item_contact">contact</span>
              </div>
            </div>
          </div>
          <div className="hero_container">
            <div
              className="text_container"
              onMouseEnter={onHeroMouseEnter}
              onMouseLeave={onHeroMouseLeave}
            >
              <div>WHO</div>
              <div>WROTE</div>
              <div>THIS</div>
              <div>SHITTY</div>
              <div>CODE?</div>
            </div>
          </div>
          <div className="space2"></div>

          <div className="space">
            <div className="about_me_container">
              <div>I’m a selectively skilled product </div>
              <div>designer with strong focus on</div>
              <div>producing high quality & </div>
              <div>impactful digital experience.</div>
            </div>
          </div>
          <div className="space2"></div>
          <div className="space2"></div>
        </div>
        <div className="layer layer_red">
          <div className="header">
            <div className="logo_container">
              <img
                src="./src/assets/logo_dark.png"
                className="logo"
                alt="dmgcoding"
              />
            </div>
            <div className="header__menu">
              <div className="textbox">
                <span id="menu_item_about">about</span>
                <span id="menu_item_about">about</span>
              </div>
              <div className="textbox">
                <span id="menu_item_work">work</span>
                <span id="menu_item_work">work</span>
              </div>
              <div className="textbox">
                <span id="menu_item_contact">contact</span>
                <span id="menu_item_contact">contact</span>
              </div>
            </div>
          </div>
          <div className="hero_container">
            <div className="text_container text_black">
              <div>OH</div>
              <div>WAIT!</div>
              <div>THIS IS</div>
              <div>MY</div>
              <div>CODE?</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
