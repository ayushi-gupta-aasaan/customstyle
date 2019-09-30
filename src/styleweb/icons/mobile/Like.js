import React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
const Like = props => (
  <Svg viewBox="0 0 48 48" width="1em" height="1em" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M0 0h48v48H0z" />
      <G fillRule="nonzero" transform="translate(6 4)">
        <Path
          fill="#F2A200"
          d="M34.259 24.766a3.503 3.503 0 0 0 .897-2.344 3.52 3.52 0 0 0-3.515-3.516h-6.824c.676-2.05.964-4.772.964-5.938v-1.171a4.693 4.693 0 0 0-4.687-4.688h-1.172c-.538 0-1.006.366-1.137.888l-.638 2.554c-.895 3.576-3.734 7.522-6.674 8.24a3.52 3.52 0 0 0-3.27-2.229H1.172c-.647 0-1.172.525-1.172 1.172v21.094C0 39.475.525 40 1.172 40h7.031a3.52 3.52 0 0 0 3.174-2.004l4.026 1.342c1.317.44 2.688.662 4.077.662h9.817a3.52 3.52 0 0 0 3.269-4.81 3.522 3.522 0 0 0 2.59-3.393c0-.9-.34-1.721-.897-2.344a3.503 3.503 0 0 0 .897-2.344c0-.899-.34-1.72-.897-2.343z"
        />
        <Path
          fill="#1F6099"
          d="M11.473 18.79c-.096-.79-1.786-2.227-3.27-2.227H1.172c-.647 0-1.172.524-1.172 1.171v21.094C0 39.475.525 40 1.172 40h7.031a3.52 3.52 0 0 0 3.174-2.004c.5-9.246.532-15.648.096-19.205z"
        />
        <Path
          fill="#1476CC"
          d="M9.375 36.484c0 .646-.526 1.172-1.172 1.172h-5.86v-18.75h5.86c.646 0 1.172.526 1.172 1.172v16.406z"
        />
        <Path
          fill="#FD9"
          d="M29.297 25.938h2.344c.646 0 1.172.525 1.172 1.171s-.526 1.172-1.172 1.172h-2.344a1.172 1.172 0 0 0 0 2.344h2.344c.646 0 1.172.526 1.172 1.172 0 .646-.526 1.172-1.172 1.172h-2.344a1.172 1.172 0 0 0 0 2.343c.646 0 1.172.526 1.172 1.172 0 .646-.526 1.172-1.172 1.172H19.48c-1.136 0-2.259-.182-3.336-.541l-4.425-1.475v-14.5c1.838-.35 3.637-1.514 5.261-3.42 1.586-1.86 2.872-4.328 3.44-6.6l.417-1.667h.257a2.347 2.347 0 0 1 2.343 2.344v1.171c0 1.573-.492 4.591-1.121 5.938h-2.394a1.172 1.172 0 0 0 0 2.344H31.64c.646 0 1.172.526 1.172 1.172 0 .646-.526 1.172-1.172 1.172h-2.344a1.172 1.172 0 0 0 0 2.343z"
        />
        <Circle cx={5.859} cy={34.141} r={1.172} fill="#FFF" />
        <Path
          fill="#FD9"
          d="M22.266 0c-.648 0-1.172.525-1.172 1.172v2.422a1.172 1.172 0 0 0 2.343 0V1.172A1.17 1.17 0 0 0 22.267 0zm-4.972 5.168L15.636 3.51a1.172 1.172 0 1 0-1.657 1.657l1.657 1.657a1.172 1.172 0 0 0 1.658-1.657zM30.552 3.51a1.172 1.172 0 0 0-1.657 0l-1.657 1.658a1.172 1.172 0 0 0 1.657 1.657l1.657-1.657a1.17 1.17 0 0 0 0-1.657z"
        />
      </G>
    </G>
  </Svg>
);

export default Like;
