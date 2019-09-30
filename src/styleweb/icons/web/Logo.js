import React from "react";

const Logo = props => (
  <svg viewBox="0 0 130 21" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <text
        fill="#FFF"
        fontFamily="Avenir-Heavy, Avenir"
        fontSize={20}
        fontWeight={600}
        letterSpacing={0.2}
        transform="translate(-6 -6)"
      >
        <tspan x={32.4} y={22}>
          aasaanjobs
        </tspan>
      </text>
      <path d="M-6-6h143v32H-6z" />
      <path
        fill="#009EED"
        d="M18.829 14.295s.238 1.317.743 2.634c.504 1.316-.595 2.615-1.928 2.334-1.333-.281-2.654-.922-3.102-.847-.447.075 2.769-2.525 4.287-4.121"
      />
      <path
        fill="#009EED"
        d="M19.983 9.75c0 5.374-4.472 9.73-9.988 9.73-5.517 0-9.99-4.356-9.99-9.73 0-5.373 4.473-9.729 9.99-9.729 5.516 0 9.988 4.356 9.988 9.73"
      />
      <path
        fill="#FFF"
        d="M15.044 14.77s1.771-3.966.943-6.564c-.83-2.597-3.533-4.686-6.397-4.361-2.864.325-5.408 1.78-5.803 5.984 0 0 .038 4.116 3.858 5.608 0 0 2.51 1.334 7.399-.667"
      />
      <path
        fill="#97DBFC"
        d="M15.176 10.488s.42-1.498-1.381-5.382c0 0-3.43-3.007-7.712 0 0 0-4.33 2.978-1.105 8.33 0 0 3.628 1.779 5.742 1.428 0 0 .807-2.814 2.5-3.507 0 0 .866-.465 1.938-.808l.018-.061z"
      />
      <path
        fill="#FFF"
        d="M12.62 9.83c0 1.437-1.196 2.602-2.672 2.602-1.476 0-2.672-1.165-2.672-2.603 0-1.438 1.196-2.603 2.672-2.603 1.476 0 2.672 1.165 2.672 2.603"
      />
    </g>
  </svg>
);

export default Logo;