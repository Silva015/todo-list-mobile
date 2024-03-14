import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
export const CheckConfirmed = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G opacity={0.9}>
      <Path
        fill="#5E60CE"
        d="M11.98 19.426a7.41 7.41 0 1 0 0-14.82 7.41 7.41 0 0 0 0 14.82Z"
      />
      <Path
        fill="#5E60CE"
        d="M11.964 4.86A7.14 7.14 0 1 1 4.824 12a7.168 7.168 0 0 1 7.14-7.14Zm0-1.587a8.727 8.727 0 1 0 .072 17.454 8.727 8.727 0 0 0-.072-17.454Z"
      />
      <Path
        fill="#F2F2F2"
        d="M15.43 9.342 11.1 13.674l-2.483-2.482-.836.835 3.319 3.319 5.168-5.168-.836-.836Z"
      />
    </G>
  </Svg>
);
