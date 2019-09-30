import React from "react";
import Svg, { G, Path } from "react-native-svg";
const LocateLogo = props => (
  <Svg viewBox="0 0 15 15" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-5-5h24v24H-5z" />
      <Path
        fill="#1476CC"
        fillRule="nonzero"
        d="M7.333 4.667a2.666 2.666 0 1 0 0 5.333 2.666 2.666 0 1 0 0-5.333zm5.96 2A5.996 5.996 0 0 0 8 1.373V.667C8 .3 7.7 0 7.333 0c-.366 0-.666.3-.666.667v.706a5.996 5.996 0 0 0-5.294 5.294H.667c-.367 0-.667.3-.667.666C0 7.7.3 8 .667 8h.706a5.996 5.996 0 0 0 5.294 5.293V14c0 .367.3.667.666.667.367 0 .667-.3.667-.667v-.707A5.996 5.996 0 0 0 13.293 8H14c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666h-.707zM7.333 12a4.663 4.663 0 0 1-4.666-4.667 4.663 4.663 0 0 1 4.666-4.666A4.663 4.663 0 0 1 12 7.333 4.663 4.663 0 0 1 7.333 12z"
      />
    </G>
  </Svg>
);

export default LocateLogo;
