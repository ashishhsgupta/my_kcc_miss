import React from "react";
import { Button } from "react-bootstrap";

export const GlobalButton = React.memo((props) => {
  const { className, callBack, title, disabled, noUpperCase, btnTitle, htmlType="button" } = props;
  const btnClick = () => {
    if (disabled) {
      return;
    }
    if(callBack){
    callBack();
    }
  };
  return (
    <Button
      className={className}
      type={htmlType}
      onClick={callBack}
      title={title}
      disabled={disabled}
      onFocus={(e) => e.target.blur()}
    >
      {btnTitle && (noUpperCase ? btnTitle : btnTitle.toUpperCase())}
    </Button>
  );
});
