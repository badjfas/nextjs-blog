import React, { FC } from "react";
import LayoutPresenter from "./LayoutPresenter";
const LayoutContainer: FC = (props) => {
  return <LayoutPresenter>{props.children}</LayoutPresenter>;
};

export default LayoutContainer;
