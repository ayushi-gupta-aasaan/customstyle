import React from "react";
import Svg, { Path } from "react-native-svg";
const FacebookIcon = props => (
  <Svg viewBox="0 0 16 16" width="1em" height="1em" {...props}>
    <Path
      fill={props.color}
      d="M14.125 0H1.875A1.877 1.877 0 0 0 0 1.875v12.25C0 15.159.841 16 1.875 16h12.25A1.877 1.877 0 0 0 16 14.125V1.875A1.877 1.877 0 0 0 14.125 0zm.625 14.125c0 .345-.28.625-.625.625h-3.563V9.656h1.931l.32-1.937h-2.25V6.375c0-.53.407-.938.937-.938h1.281V3.5H11.5a2.875 2.875 0 0 0-2.874 2.88v1.34H6.75v1.937h1.876v5.094H1.875a.626.626 0 0 1-.625-.625V1.875c0-.345.28-.625.625-.625h12.25c.345 0 .625.28.625.625v12.25z"
    />
  </Svg>
);

export default FacebookIcon;