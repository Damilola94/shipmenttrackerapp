import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FilterIcon = (props) => (

  <Svg
  xmlns="http://www.w3.org/2000/svg"
  width={25}
  height={24}
  fill="none"
  {...props}
>
  <Path
    stroke="#58536E"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M6.712 12h11.076M4.25 7h16m-9.846 10h3.692"
  />
</Svg>


)
export default FilterIcon
