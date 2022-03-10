import React, { useState } from "react";

import SwsPad from "./swsPad";
import IcmHMI from "./icmHMI";
import HeadUnitHMI from "./huHMI";
import { AC_SET_ID, SRC_SET_ID } from "./setAcSrcButton";

const ICM_ON_CTRL = "ICM_ON_CTRL";
const INFO_ON_CTRL = "INFO_ON_CTRL";
const AC_ON_CTRL = "AC_ON_CTRL";
const ICM_INIT_MSG = "[Instrument Cluster Module HMI] Home Page.";
const HU_INIT_MSG = "[Head Unit HMI] Home Page.";

const INSTANT_MSG_DURATION = 500;
const MAX_AUDIO_CHANNEL = 7;
const LEFT_BTN_ACTIVE_MSG = "Left button is active.";
const RIGHT_BTN_ACTIVE_MSG = "Right button is active.";
const UP_BTN_ACTIVE_MSG = "Up button is active.";
const DOWN_BTN_ACTIVE_MSG = "Down button is active.";
const OK_BTN_ACTIVE_MSG = "OK button is active";

const IviHmi = () => {
  const [icmMessage, setIcmMessage] = useState(ICM_INIT_MSG);
  const [huMessage, setHuMessage] = useState(HU_INIT_MSG);
  const [swsCtrlTarget, setSwsCtrlTarget] = useState(INFO_ON_CTRL);
  const [customizedSetting, setCustomizedSetting] = useState(AC_SET_ID);
  const [audioChannel, setAudioChannel] = useState(0);
  const [muted, setMuted] = useState(false);
  const [acOn, setAcOnOff] = useState(true);

  const acSrcSettingOnChange = (event) => {
    const selectedCustomizedSetting = event.target.id;
    setCustomizedSetting(selectedCustomizedSetting);
    if (
      selectedCustomizedSetting === SRC_SET_ID &&
      swsCtrlTarget === AC_ON_CTRL
    )
      setSwsCtrlTarget(INFO_ON_CTRL);
    setHuMessage(HU_INIT_MSG);
  };

  const swapHuIcmBtnOnClick = () => {
    switch (swsCtrlTarget) {
      case ICM_ON_CTRL:
        setSwsCtrlTarget(INFO_ON_CTRL);
        setHuMessage(HU_INIT_MSG);
        break;
      case INFO_ON_CTRL:
        setSwsCtrlTarget(ICM_ON_CTRL);
        break;
      case AC_ON_CTRL:
        setSwsCtrlTarget(ICM_ON_CTRL);
        setHuMessage(HU_INIT_MSG);
        break;
      default:
        console.error("Error setting of swapHuIcmBtnOnClick.");
    }
  };

  const setInstantMsg = (stateMsg, instantMsg, setMsgFn) => {
    if (stateMsg !== instantMsg) {
      let preMsg = stateMsg;
      setMsgFn(instantMsg);
      setTimeout(() => {
        setMsgFn(preMsg);
      }, INSTANT_MSG_DURATION);
    }
  };

  const customizedBtnOnclick = () => {
    switch (customizedSetting) {
      case AC_SET_ID:
        {
          setSwsCtrlTarget(AC_ON_CTRL);
          setHuMessage("HMI switches to [Air Conditioner Control].");
        }
        break;
      case SRC_SET_ID:
        {
          let newAudioChannel = 0;
          if (audioChannel < MAX_AUDIO_CHANNEL)
            newAudioChannel = audioChannel + 1;
          setAudioChannel(newAudioChannel);
          let instantMsg = "Audio Source Changed to " + newAudioChannel;
          setInstantMsg(HU_INIT_MSG, instantMsg, setHuMessage);
        }
        break;

      default:
        console.error("Error setting of customizedBtnOnclick.");
    }
  };

  const leftBtnOnClick = () => {
    switch (swsCtrlTarget) {
      case ICM_ON_CTRL:
        setInstantMsg(icmMessage, LEFT_BTN_ACTIVE_MSG, setIcmMessage);
        break;
      case INFO_ON_CTRL:
        {
          let instantMsg = "[Infortainment HMI]: " + LEFT_BTN_ACTIVE_MSG;
          setInstantMsg(huMessage, instantMsg, setHuMessage);
        }

        break;
      case AC_ON_CTRL:
        {
          let instantMsg = "[Air Conditioner HMI]: " + LEFT_BTN_ACTIVE_MSG;
          setInstantMsg(huMessage, instantMsg, setHuMessage);
        }
        break;
      default:
        console.error("Error setting of leftBtnOnClick.");
    }
  };

  const upBtnOnClick = () => {
    switch (swsCtrlTarget) {
      case ICM_ON_CTRL:
        setInstantMsg(icmMessage, UP_BTN_ACTIVE_MSG, setIcmMessage);
        break;
      case INFO_ON_CTRL:
        {
          let instantMsg = "[Infortainment HMI]: " + UP_BTN_ACTIVE_MSG;
          setInstantMsg(huMessage, instantMsg, setHuMessage);
        }

        break;
      case AC_ON_CTRL:
        {
          let instantMsg = "[Air Conditioner HMI]: " + UP_BTN_ACTIVE_MSG;
          setInstantMsg(huMessage, instantMsg, setHuMessage);
        }
        break;
      default:
        console.error("Error setting of RIGHT_BTN_ACTIVE_MSG.");
    }
  };

  const rightBtnOnClick = () => {
    switch (swsCtrlTarget) {
      case ICM_ON_CTRL:
        setInstantMsg(icmMessage, RIGHT_BTN_ACTIVE_MSG, setIcmMessage);
        break;
      case INFO_ON_CTRL:
        {
          let instantMsg = "[Infortainment HMI]: " + RIGHT_BTN_ACTIVE_MSG;
          setInstantMsg(huMessage, instantMsg, setHuMessage);
        }

        break;
      case AC_ON_CTRL:
        {
          let instantMsg = "[Air Conditioner HMI]: " + RIGHT_BTN_ACTIVE_MSG;
          setInstantMsg(huMessage, instantMsg, setHuMessage);
        }
        break;
      default:
        console.error("Error setting of RIGHT_BTN_ACTIVE_MSG.");
    }
  };

  const downBtnOnClick = () => {
    switch (swsCtrlTarget) {
      case ICM_ON_CTRL:
        setInstantMsg(icmMessage, DOWN_BTN_ACTIVE_MSG, setIcmMessage);
        break;
      case INFO_ON_CTRL:
        {
          let instantMsg = "[Infortainment HMI]: " + DOWN_BTN_ACTIVE_MSG;
          setInstantMsg(huMessage, instantMsg, setHuMessage);
        }

        break;
      case AC_ON_CTRL:
        {
          let instantMsg = "[Air Conditioner HMI]: " + DOWN_BTN_ACTIVE_MSG;
          setInstantMsg(huMessage, instantMsg, setHuMessage);
        }
        break;
      default:
        console.error("Error setting of RIGHT_BTN_ACTIVE_MSG.");
    }
  };

  const centralBtnOnClick = () => {
    switch (swsCtrlTarget) {
      case ICM_ON_CTRL:
        setInstantMsg(icmMessage, OK_BTN_ACTIVE_MSG, setIcmMessage);
        break;
      case INFO_ON_CTRL:
        {
          let instantMsg = "[Infortainment HMI]: " + OK_BTN_ACTIVE_MSG;
          setInstantMsg(huMessage, instantMsg, setHuMessage);
          muted ? setMuted(false) : setMuted(true);
        }

        break;
      case AC_ON_CTRL:
        {
          let instantMsg = "[Air Conditioner HMI]: " + OK_BTN_ACTIVE_MSG;
          setInstantMsg(huMessage, instantMsg, setHuMessage);
          acOn ? setAcOnOff(false) : setAcOnOff(true);
        }
        break;
      default:
        console.error("Error setting of RIGHT_BTN_ACTIVE_MSG.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="h1 text-center align-middle align-text-center mb-4">
          A Simple SWS-IVI UE DEMO
        </div>
      </div>
      <div className="row mb-4">
        <SwsPad
          centralBtnOnClick={centralBtnOnClick}
          leftBtnOnClick={leftBtnOnClick}
          upBtnOnClick={upBtnOnClick}
          rightBtnOnClick={rightBtnOnClick}
          downBtnOnClick={downBtnOnClick}
          swapHuIcmBtnOnClick={swapHuIcmBtnOnClick}
          customizedBtnOnclick={customizedBtnOnclick}
        />
      </div>
      <div className="row mb-4">
        <IcmHMI message={icmMessage} />
      </div>

      <div className="row">
        <HeadUnitHMI
          muted={muted}
          acOn={acOn}
          acSrcSettingOnChange={acSrcSettingOnChange}
          message={huMessage}
        />
      </div>
    </div>
  );
};

export default IviHmi;
