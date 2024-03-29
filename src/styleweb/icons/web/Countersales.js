import React from "react";

const Countersales = props => (
  <svg viewBox="0 0 40 40" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd" transform="translate(5 4)">
      <rect
        width={28.6}
        height={7.6}
        x={0.7}
        y={1.5}
        stroke="#1A4266"
        strokeWidth={1.4}
        rx={2}
      />
      <path fill="#1A4266" d="M2 9h1.4v17H2z" />
      <rect width={1.4} height={8} x={2} y={25} fill="#1A4266" rx={0.7} />
      <rect width={30.4} height={1.4} y={28} fill="#1A4266" rx={0.7} />
      <rect width={1.4} height={8} x={27} y={25} fill="#1A4266" rx={0.7} />
      <path
        fill="#1A4266"
        d="M27 9h1.4v17H27zm-8.723 12.7a4.881 4.881 0 0 1 4.875 4.875v1.974a.659.659 0 0 1-.658.66H7.659a.659.659 0 0 1-.659-.66v-1.974a4.881 4.881 0 0 1 4.876-4.876h.27a3.906 3.906 0 0 1-.992-2.605v-2.171A3.927 3.927 0 0 1 15.076 13 3.927 3.927 0 0 1 19 16.923v2.171c0 1-.376 1.912-.993 2.605h.27zm-3.2-7.382a2.608 2.608 0 0 0-2.605 2.605v.126h.936a2.92 2.92 0 0 0 2.244-1.047.659.659 0 0 1 .838-.145l1.163.683a2.609 2.609 0 0 0-2.577-2.222zm-1.669 4.05h-.936v.726a2.608 2.608 0 0 0 2.604 2.605 2.608 2.608 0 0 0 2.605-2.605v-1.009l-1.41-.828a4.233 4.233 0 0 1-2.863 1.11zm8.427 9.523v-1.316a3.562 3.562 0 0 0-3.558-3.558h-2.542v.723a.659.659 0 0 1-1.318 0v-.723h-2.541a3.562 3.562 0 0 0-3.558 3.558v1.316h13.517z"
      />
    </g>
  </svg>
);

export default Countersales;
