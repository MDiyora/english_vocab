export default function Cubes() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 800"
      opacity="0.86"
    >
      <defs>
        <filter
          id="bbblurry-filter"
          x="-100%"
          y="-100%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            stdDeviation="102"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            edgeMode="none"
            result="blur"
          ></feGaussianBlur>
        </filter>
      </defs>
      <g filter="url(#bbblurry-filter)">
        <ellipse
          rx="63"
          ry="65"
          cx="389.3258017424813"
          cy="354.3629993444327"
          fill="#38bdf8ff"
        ></ellipse>
        <ellipse
          rx="63"
          ry="65"
          cx="602.7278805001647"
          cy="222.3913015113795"
          fill="#f472b6ff"
        ></ellipse>
      </g>
    </svg>
  );
}
