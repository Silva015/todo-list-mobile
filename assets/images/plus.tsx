import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
export const Plus = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <G fill="#F2F2F2" clipPath="url(#a)">
      <Path d="M7.984 1.452a6.532 6.532 0 1 1-6.532 6.532 6.557 6.557 0 0 1 6.532-6.532Zm0-1.452a7.984 7.984 0 1 0 .065 15.967A7.984 7.984 0 0 0 7.984 0Z" />
      <Path d="M11.707 7.381H8.495V4.17H7.414V7.38H4.199v1.082h3.215v3.211h1.081V8.463h3.212V7.38Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
