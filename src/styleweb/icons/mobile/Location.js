import React from "react";
import Svg, { G, Path, Ellipse } from "react-native-svg";
const Location = props => (
  <Svg viewBox="0 0 12 15" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-2-1h16v16H-2z" />
      <G
        stroke="#1476CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.12}
        transform="translate(1 1)"
      >
        <Path d="M10 5.318C10 9.455 5 13 5 13S0 9.455 0 5.318C0 2.381 2.239 0 5 0s5 2.381 5 5.318z" />
        <Ellipse cx={5} cy={5.318} rx={1.667} ry={1.773} />
      </G>
    </G>
  </Svg>
);

export default Location;
