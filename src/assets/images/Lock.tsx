import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Lock(props) {
  return (
    <Svg
      width={16}
      height={18}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.429 7.875h.857c.946 0 1.714.756 1.714 1.688v6.75c0 .931-.768 1.687-1.714 1.687H1.714C.768 18 0 17.244 0 16.312v-6.75c0-.931.768-1.687 1.714-1.687h.857V5.344C2.571 2.392 5.001 0 8 0c2.998 0 5.429 2.392 5.429 5.344v2.531zm-8-2.531v2.531h5.142V5.344c0-1.398-1.15-2.532-2.571-2.532-1.42 0-2.571 1.134-2.571 2.532z"
        fill="#8A898E"
      />
    </Svg>
  );
}

export default Lock;
