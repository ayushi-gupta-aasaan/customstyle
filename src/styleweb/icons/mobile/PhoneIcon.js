import React from "react";
import Svg, { G, Path } from "react-native-svg";
const PhoneIcon = props => (
  <Svg
    viewBox="0 0 18 18"
    fill={props.color}
    width="1em"
    height="1em"
    {...props}
  >
    <G fillRule="evenodd">
      <Path d="M-3-3h24v24H-3z" />
      <Path
        fillRule="nonzero"
        stroke="#1476CC"
        strokeWidth={1.2}
        d="M13.86 17c-.666 0-1.47-.167-2.354-.5-1.939-.731-4.048-2.176-5.939-4.067-1.892-1.891-3.336-4.001-4.067-5.94-.665-1.762-.667-3.209-.004-3.87.095-.096.192-.198.292-.303C2.392 1.684 3.075.969 3.98 1c.624.026 1.229.413 1.847 1.183 1.83 2.275 1.005 3.085.05 4.025l-.168.167c-.156.156-.45.878 2.293 3.622.895.896 1.659 1.551 2.27 1.948.383.25 1.07.627 1.353.345l.17-.171c.938-.952 1.748-1.774 4.02.053.77.62 1.158 1.223 1.184 1.848.037.904-.684 1.589-1.32 2.193-.105.1-.207.197-.302.292-.33.329-.855.494-1.517.494zM3.916 1.538c-.643 0-1.224.611-1.738 1.152-.103.11-.203.215-.302.313-.493.493-.443 1.788.127 3.301.705 1.869 2.106 3.91 3.945 5.75 1.838 1.837 3.88 3.238 5.748 3.942 1.513.572 2.808.62 3.3.128.1-.099.205-.199.313-.301.553-.526 1.18-1.12 1.153-1.781-.02-.454-.35-.942-.983-1.45-1.893-1.524-2.423-.986-3.301-.095l-.172.174c-.42.42-1.102.327-2.028-.275-.642-.418-1.435-1.097-2.356-2.019-2.277-2.276-3.005-3.67-2.293-4.383l.172-.17c.893-.878 1.431-1.408-.092-3.303-.51-.633-.997-.963-1.451-.982h-.042z"
      />
    </G>
  </Svg>
);

export default PhoneIcon;