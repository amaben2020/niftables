const Profitability = ({ fill = "none", ...props }: { fill?: string }) => {
  return (
    <svg
      width="73"
      height="83"
      viewBox="0 0 73 83"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_2207_361)">
        <path
          d="M10.4039 68.1646L5.15393 65.18L5.40104 64.7453L2.77604 63.253C1.36908 62.4532 0.5 60.9594 0.5 59.341V56.3675H0V50.4205H0.5V44.4735H0V38.5265H0.5V32.5795H0V26.6325H0.5V23.659C0.5 22.0406 1.36908 20.5468 2.77604 19.747L5.40104 18.2547L5.15393 17.82L10.4039 14.8354L10.651 15.2701L15.901 12.2855L15.6539 11.8508L20.9039 8.86626L21.151 9.30093L26.401 6.31634L26.1539 5.88167L31.4039 2.89708L31.651 3.33175L34.276 1.83946C35.655 1.0555 37.345 1.0555 38.724 1.83946L41.349 3.33175L41.5961 2.89708L46.8461 5.88167L46.599 6.31634L51.849 9.30093L52.0961 8.86626L57.3461 11.8508L57.099 12.2855L62.349 15.2701L62.5961 14.8354L67.8461 17.82L67.599 18.2547L70.224 19.747C71.6309 20.5468 72.5 22.0406 72.5 23.659V26.6325H73V32.5795H72.5V38.5265H73V44.4735H72.5V50.4205H73V56.3675H72.5V59.341C72.5 60.9594 71.6309 62.4532 70.224 63.253L67.599 64.7453L67.8461 65.18L62.5961 68.1646L62.349 67.7299L57.099 70.7145L57.3461 71.1492L52.0961 74.1337L51.849 73.6991L46.599 76.6837L46.8461 77.1183L41.5961 80.1029L41.349 79.6683L38.724 81.1605C37.345 81.9445 35.655 81.9445 34.276 81.1605L31.651 79.6683L31.4039 80.1029L26.1539 77.1183L26.401 76.6837L21.151 73.6991L20.9039 74.1337L15.6539 71.1492L15.901 70.7145L10.651 67.7299L10.4039 68.1646Z"
          stroke="url(#paint0_linear_2207_361)"
          stroke-dasharray="5.84 5.84"
        />
        <path
          d="M11 30.7345C11 28.8961 12.0088 27.206 13.6269 26.3335L34.1269 15.2796C35.6082 14.4809 37.3918 14.4809 38.8731 15.2796L59.3731 26.3335C60.9912 27.206 62 28.8961 62 30.7345V52.2655C62 54.1039 60.9912 55.794 59.3731 56.6665L38.8731 67.7204C37.3918 68.5191 35.6082 68.5191 34.1269 67.7204L13.6269 56.6665C12.0088 55.794 11 54.1039 11 52.2655V30.7345Z"
          fill="white"
        />
        <path
          d="M15 33.2437C15 31.4005 16.0141 29.7067 17.6389 28.8363L33.6389 20.2649C35.1138 19.4747 36.8862 19.4747 38.3611 20.2649L54.3611 28.8363C55.9859 29.7067 57 31.4005 57 33.2437V49.7563C57 51.5995 55.9859 53.2933 54.3611 54.1637L38.3611 62.7351C36.8862 63.5253 35.1138 63.5253 33.6389 62.7351L17.6389 54.1637C16.0141 53.2933 15 51.5995 15 49.7563V33.2437Z"
          fill="#13171D"
        />
        <g clip-path="url(#clip1_2207_361)">
          <path
            d="M38.7898 31.1579V32.6466H40.8313L35.6319 37.5489L33.2635 35.3158L26.3895 41.797L27.5059 42.8496L33.2635 37.4209L35.6319 39.6541L41.9477 33.6992V35.6241H43.5266V31.1579H38.7898ZM38.7898 39.3458V52H43.5266V39.3458H38.7898ZM32.474 42.3233V52H37.2108V42.3233H32.474ZM26.1582 44.5564V52H30.895V44.5564H26.1582Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2207_361"
          x1="5.43892e-07"
          y1="41.5"
          x2="73"
          y2="41.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3D8BFF" />
          <stop offset="1" stop-color="#AB23FF" />
        </linearGradient>
        <clipPath id="clip0_2207_361">
          <rect width="73" height="83" fill="white" />
        </clipPath>
        <clipPath id="clip1_2207_361">
          <rect
            width="22"
            height="22"
            fill="white"
            transform="translate(25 30)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Profitability;
