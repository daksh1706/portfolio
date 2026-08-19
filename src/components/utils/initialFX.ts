import { TextSplitter } from "../../utils/textSplitter";
import gsap from "gsap";
import { lenis } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (lenis) {
    lenis.start();
  }
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const selectors = [".landing-info h3", ".landing-intro h2", ".landing-intro h1"];
  const elements = selectors.flatMap(selector => Array.from(document.querySelectorAll(selector)));
  var landingText = new TextSplitter(elements, {
    type: "chars,lines",
    linesClass: "split-line",
  });
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  // Row 1 (Purple prefixes)
  var top1 = new TextSplitter(".landing-h2-1", TextProps);
  var top2 = new TextSplitter(".landing-h2-2", TextProps);
  var top3 = new TextSplitter(".landing-h2-3", TextProps);

  // Row 2 (White roles)
  var bot1 = new TextSplitter(".landing-h2-info", TextProps);
  var bot2 = new TextSplitter(".landing-h2-info-1", TextProps);
  var bot3 = new TextSplitter(".landing-h2-info-2", TextProps);

  // Immediately hide subsequent titles so they never overlap
  gsap.set([...top2.chars, ...top3.chars, ...bot2.chars, ...bot3.chars], {
    opacity: 0,
    y: 80,
  });

  // Animate the initial primary title in cleanly
  gsap.fromTo(
    [...top1.chars, ...bot1.chars],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Start synchronized 3-role cycle:
  // 1: Full-Stack Developer -> 2: Software Engineer -> 3: iOS Developer -> repeat
  LoopTitles([top1, top2, top3], [bot1, bot2, bot3]);
}

function LoopTitles(topList: TextSplitter[], botList: TextSplitter[]) {
  const count = Math.min(topList.length, botList.length);
  if (count < 2) return;

  const tl = gsap.timeline({ repeat: -1 });
  const displayDuration = 3.5;
  const animDuration = 0.9;
  const stagger = 0.035;

  for (let i = 0; i < count; i++) {
    const curTop = topList[i];
    const curBot = botList[i];
    const nextTop = topList[(i + 1) % count];
    const nextBot = botList[(i + 1) % count];
    const timeOffset = (i + 1) * displayDuration;

    tl.to(
      [...curTop.chars, ...curBot.chars],
      {
        y: -80,
        opacity: 0,
        duration: animDuration,
        ease: "power3.inOut",
        stagger: stagger,
      },
      timeOffset
    ).fromTo(
      [...nextTop.chars, ...nextBot.chars],
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        duration: animDuration,
        ease: "power3.inOut",
        y: 0,
        stagger: stagger,
      },
      timeOffset + 0.1
    );
  }
}
