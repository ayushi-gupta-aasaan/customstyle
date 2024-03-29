import React from "react";

const WhatsappIcon = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 23 23"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <path
        id="b"
        d="M1.16 11.892A7.912 7.912 0 0 1 .103 7.928C.104 3.556 3.662 0 8.033 0a7.88 7.88 0 0 1 5.61 2.325 7.88 7.88 0 0 1 2.321 5.61c-.002 4.37-3.56 7.928-7.93 7.928H8.03a7.927 7.927 0 0 1-3.79-.965L.036 16l1.125-4.108z"
      />
      <filter
        id="a"
        width="152.5%"
        height="152.2%"
        x="-27.5%"
        y="-24.8%"
        filterUnits="objectBoundingBox"
      >
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={0.975}
          result="shadowSpreadOuter1"
        />
        <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={1}
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.130774457 0"
        />
      </filter>
      <path
        id="d"
        d="M6.051 4.614c-.16-.387-.324-.334-.446-.34a7.942 7.942 0 0 0-.38-.007.728.728 0 0 0-.528.247c-.182.199-.694.678-.694 1.653s.71 1.917.81 2.05c.099.132 1.397 2.133 3.385 2.99.473.205.842.327 1.13.418.474.15.906.13 1.248.079.38-.057 1.172-.48 1.337-.942.165-.463.165-.86.116-.943-.05-.082-.182-.132-.38-.23-.198-.1-1.172-.58-1.354-.645-.182-.067-.314-.1-.446.099-.132.198-.512.644-.627.776-.116.133-.232.15-.43.05-.198-.1-.836-.308-1.593-.983-.59-.525-.987-1.174-1.103-1.373-.115-.198-.012-.305.087-.404.09-.089.198-.231.297-.347.1-.116.133-.198.199-.33.066-.133.033-.248-.017-.348-.05-.099-.446-1.074-.61-1.47z"
      />
      <filter
        id="c"
        width="136.7%"
        height="140.1%"
        x="-18.6%"
        y="-20.1%"
        filterUnits="objectBoundingBox"
      >
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={0.5}
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0843806612 0"
        />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0-1h24v24H0z" />
      <g strokeLinecap="square" transform="translate(4 3)">
        <use fill="#000" filter="url(#a)" xlinkHref="#b" />
        <use fill="#3AC34C" stroke="#FFF" strokeWidth={1.95} xlinkHref="#b" />
      </g>
      <g transform="translate(4 3)">
        <use fill="#000" filter="url(#c)" xlinkHref="#d" />
        <use fill="#FFF" xlinkHref="#d" />
      </g>
    </g>
  </svg>
);

export default WhatsappIcon;
