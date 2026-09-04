import React from "react";
import { BUTTON_TYPE } from "./Constant";
import { GlobalButton } from "./GlobalButton";
import "../buttons/ButtonStyle.css";

export const GenericButton = React.memo((props) => {
  const { type, btnClass, onClick } = props;
  const getBtnElement = () => {
    let btn = null;
    switch (type) {
      case BUTTON_TYPE.GREEN_BTN:
        btn = (
          <GlobalButton
            {...props}
            callBack={onClick}
            className={`btn genGreenBtn ${btnClass || ""}`}
          />
        );
        break;
      case BUTTON_TYPE.RED_BTN:
        btn = (
          <GlobalButton
            {...props}
            callBack={onClick}
            className={`btn genRedBtn ${btnClass || ""}`}
          />
        );
        break;
      case BUTTON_TYPE.PURPLE_BTN:
        btn = (
          <GlobalButton
            {...props}
            callBack={onClick}
            className={`btn genPurpleBtn ${btnClass || ""}`}
          />
        );
        break;
      case BUTTON_TYPE.HYPER_LINK_RED_BTN:
        btn = (
          <GlobalButton
            {...props}
            callBack={onClick}
            className={`btn genRedBtn ${btnClass || ""}`}
          />
        );
        case BUTTON_TYPE.BACK_BTN:
          btn =(
            <GlobalButton 
            {...props}
            callBack={onClick}
            className={`btn genBackBtn ${btnClass || ""}`}
            />
          )
        break;
      default:
        break;
    }
    return btn;
  };
  return <>{getBtnElement()}</>;
});
GenericButton.displayName = "GenericButton";
