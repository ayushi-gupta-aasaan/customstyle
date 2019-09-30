import React from "react";
import Svg, { G, Path } from "react-native-svg";
const Premium = props => (
  <Svg viewBox="0 0 14 14" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M-3-3h20v20H-3z" />
      <Path
        fill="#667480"
        fillRule="nonzero"
        d="M13.27 4.903a2.032 2.032 0 0 0-1.317-.493H9.149V2.43c0-.946-.282-1.636-.84-2.048C7.426-.263 6.23.1 6.178.117a.49.49 0 0 0-.344.465v2.387c0 .726-.346 1.343-1.036 1.836a4.177 4.177 0 0 1-1.126.568l-.05.012a1.002 1.002 0 0 0-.754-.339h-1.86A1.01 1.01 0 0 0 0 6.054v6.105a1.01 1.01 0 0 0 1.008 1.008h1.869c.245 0 .473-.09.645-.237.375.367.885.592 1.436.592h5.848c.587 0 1.106-.143 1.502-.408.506-.343.82-.886.91-1.58l.755-4.692a2.11 2.11 0 0 0-.702-1.939z"
      />
      <Path
        fill="#FFF"
        d="M13.005 6.69l-.755 4.702c0 .004 0 .012-.004.02-.032.282-.138 1.135-1.44 1.135H4.958c-.522 0-.98-.392-1.06-.91l-.013-.058V6.332l.028-.009c.009 0 .013-.004.02-.004a4.97 4.97 0 0 0 1.413-.697c.959-.682 1.469-1.6 1.469-2.653V.986c.27-.029.64-.017.914.183.294.217.44.641.44 1.257v2.47c0 .268.221.489.49.489h3.294c.244 0 .485.094.681.257.294.253.433.653.371 1.049z"
      />
      <Path
        fill="#A2A2A2"
        d="M2.905 12.159a.028.028 0 0 1-.028.028h-1.87a.028.028 0 0 1-.028-.028V6.054c0-.016.013-.028.029-.028h1.869c.016 0 .028.012.028.028v6.105z"
      />
    </G>
  </Svg>
);

export default Premium;