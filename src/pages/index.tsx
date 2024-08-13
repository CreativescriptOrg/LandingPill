import { subscribe } from "diagnostics_channel";
import React, { useEffect, useState } from "react";

const StepsInfo = [
  { title: "What should i call you", subtitle: "I'll remember, promise" },
  { title: "Cool! aditya So, what's your business about?", subtitle: null },
  { title: "Nice! What's your business called", subtitle: "Bet it's awesome!" },
  { title: "Got a landing page already?", subtitle: null },
  { title: "Got a link to your landing page?" },
  {
    title: "Alright, we're on a roll. Just a few more things",
    subtitle: "and we'll be ready to dive in",
  },
  {
    title: "How's the vibe (look & feel) of your landing page?",
    subtitle: "What's bugging you? Pick one or more",
  },
  {
    title: "How's your landing page performing?",
    subtitle: "What's not working as well as you'd like? :Pick one or more",
  },
  {
    title: "Anything else giving you trouble with your landing page?",
    subtitle: "I'm listening!",
  },
  {
    title: "Awesome",
    subtitle: "Diagnosing your lanidng page...",
    subtitle1:
      "Let me put on my doctor's coat and take a closer look. This won't take long!",
  },
];

const StepsSubTitles = [
  "I'll remember, promise",
  "(Select or enter your business category)",
  "Bet it's awesome",
];

const ZeroState = () => {
  const [first, setFirst] = useState(
    <div>
      <div></div>
      <div>Let's get started</div>
      {/* <div>{ZeroStateIcons}</div> // for ZeroState which is before the first question */}
    </div>
  );

  const [second, setSecond] = useState(
    <div>
      <div>I'm landing pill</div>
      <div>
        Your Landing Page Doc, I'm here to help you in fixing your landing page
      </div>
      {/* <div>{ZeroStateIcons}</div> // for ZeroState which is before the first question */}
    </div>
  );

  const [third, setThird] = useState(
    <div>
      <div>But first, I need to get to know you a little better</div>
      <div>Let's get started</div>
      {/* <div>{ZeroStateIcons}</div> // for ZeroState which is before the first question */}
    </div>
  );

  const [currentZeroState, setCurrentZeroState] = useState(first);

  useEffect(() => {
    // change current Zero state in 2 sec from first to second to third
  }, []);

  return (
    <div>
      <div>{currentZeroState}</div>
    </div>
  );
};

const DisplayContent = (step: any) => {
  return (
    <div>
      {/* <div>{displayImage}</div> // display Image here after exporting to assets */}
      <div>{StepsInfo[step - 1].title}</div>
      <div>{StepsInfo[step - 1].subtitle}</div>
      {/* // Dynamic Content Like Input Title && Selection State  */}
      <div>
        Next{" "}
        <span>
          Press enter <span>Enter Icon</span>
        </span>
      </div>
    </div>
  );
};

const index = () => {
  const [step, setStep] = useState(0);
  const [pressEnter, setPressEnter] = useState(false);

  useEffect(() => {
    setStep((step) => step + 1);
  }, [pressEnter]);

  return (
    <div className="main-container">
      {/* <navbar /> */}
      {step == 0 ? <ZeroState /> : <DisplayContent step={step} />}
    </div>
  );
};

export default index;
