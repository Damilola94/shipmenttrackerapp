import * as React from "react"
import Svg, { Rect } from "react-native-svg"

const CheckIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <Rect
      width={18.75}
      height={18.75}
      x={0.625}
      y={1.125}
      fill="#fff"
      rx={4.375}
    />
    <Rect
      width={18.75}
      height={18.75}
      x={0.625}
      y={1.125}
      stroke="#D0D5DD"
      strokeWidth={1.25}
      rx={4.375}
    />
  </Svg>
)
export default CheckIcon
