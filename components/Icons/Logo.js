const Logo = (props) => (
  <svg
    viewBox="0 0 428 429"
    fill="none"
    backgoudColor="#90f"
    lettersColor="none"
    strokeLinecap="square"
    strokeMiterlimit={10}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <clipPath id="a">
      <path d="M0 0h428v429H0V0z" />
    </clipPath>
    <g clipPath="url(#a)">
      <path fill="none" d="M0 0h428v429H0z" />
      <path
        fill={props.backgoudColor}
        d="M-.001 214.203C-.001 95.901 95.9 0 214.203 0a214.205 214.205 0 0 1 214.205 214.204c0 118.302-95.903 214.205-214.205 214.205S0 332.505 0 214.203z"
        fillRule="evenodd"
      />
      <path fill="none" d="M88.59 3.322h132.347v421.763H88.591z" />
      <path
        fill={props.lettersColor}
        d="M171.67 112.51v43.125h30v34.375h-30v87.532q0 9.734 3.733 13.953 3.735 4.203 14.266 4.203 7.781 0 13.781-1.125v35.5q-13.78 4.219-28.375 4.219-49.28 0-50.25-49.782v-94.5h-25.61v-34.375h25.61V112.51h46.844z"
      />
      <path fill="none" d="M198.946 441.104h132.347V19.34H198.946z" />
      <path
        fill={props.lettersColor}
        d="M248.214 331.915V288.79h-30v-34.375h30v-87.531q0-9.734-3.734-13.953-3.734-4.203-14.266-4.203-7.78 0-13.78 1.125v-35.5q13.78-4.219 28.374-4.219 49.281 0 50.25 49.781v94.5h25.61v34.375h-25.61v43.125h-46.844z"
      />
    </g>
  </svg>
);

export default Logo;
