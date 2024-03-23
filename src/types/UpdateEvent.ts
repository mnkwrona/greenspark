import type { Color } from "./Color"
export default interface UpdateEvent {
  property: string
  value: boolean | string | Color
}
