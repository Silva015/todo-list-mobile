import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const Check = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#4EA8DE"
      d="M11.964 4.86A7.14 7.14 0 1 1 4.824 12a7.168 7.168 0 0 1 7.14-7.14Zm0-1.587a8.727 8.727 0 1 0 .072 17.454 8.727 8.727 0 0 0-.072-17.454Z"
    />
  </Svg>
);
