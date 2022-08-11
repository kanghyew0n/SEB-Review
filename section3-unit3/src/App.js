import React, { useState } from "react";
import { Toggle } from "./components/BareMinimumRequirements/Toggle";
import { Modal } from "./components/BareMinimumRequirements/Modal";
import { Tag } from "./components/BareMinimumRequirements/Tag";
import { Autocomplete } from "./components/AdvancedChallenges/Autocomplete";
import { ClickToEdit } from "./components/AdvancedChallenges/ClickToEdit";
import { Tab } from "./components/BareMinimumRequirements/Tab";
import "./app.css";

const App = () => {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <>
      <div className={`container ${darkmode ? "on" : ""}`}>
        <div className={`title ${darkmode ? "on" : ""}`}>
          React Custom Component
        </div>
        <div className="darkMode" onClick={() => setDarkmode(!darkmode)}>
          {darkmode ? <span>🌚</span> : <span>🌝</span>}
        </div>

        <div className={`box ${darkmode ? "on" : ""}`}>
          <div className="sub_title">Modal</div>
          <Modal />
        </div>
        <div className={`box ${darkmode ? "on" : ""}`}>
          <div className="sub_title">Toggle</div>
          <Toggle />
        </div>
        <div className={`box ${darkmode ? "on" : ""}`}>
          <div className="sub_title">Tab</div>
          <Tab />
        </div>
        <div className={`box ${darkmode ? "on" : ""}`}>
          <div className="sub_title">Tag</div>
          <Tag />
        </div>
        <div className={`box ${darkmode ? "on" : ""}`}>
          <div className="sub_title">Autocomplete</div>
          <Autocomplete />
        </div>
        <div className={`box ${darkmode ? "on" : ""}`}>
          <div className="sub_title">ClickToEdit</div>
          <ClickToEdit />
        </div>
      </div>
    </>
  );
};
export default App;
