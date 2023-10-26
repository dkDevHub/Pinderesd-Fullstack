import React from "react"

const InfoButton = ({children, ...props}) => {
  return (
    <div {...props}>
      {children}
    </div>
  )
};

export default InfoButton;
