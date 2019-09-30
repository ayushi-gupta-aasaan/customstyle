import React from "react";
import Svg, { G, Path } from "react-native-svg";
const EditPencilGrey = props => (
  <Svg
    viewBox="0 0 12 12"
    fill={props.color}
    width="1em"
    height="1em"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path
        fill="#818E99"
        d="M0 9.503v2.5h2.5l7.374-7.374-2.5-2.5L0 9.503zm11.808-6.808c.26-.26.26-.68 0-.94l-1.56-1.56a.664.664 0 0 0-.94 0l-1.22 1.22 2.5 2.5 1.22-1.22z"
      />
      <Path d="M-4-4h20v20H-4z" />
    </G>
  </Svg>
);

export default EditPencilGrey;