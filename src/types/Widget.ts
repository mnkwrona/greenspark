import type {Action} from './Action'
import type { Color } from './Color'
import type { ImpactType } from './ImpactType'

export default interface Widget {
  id: number
  type: ImpactType
  amount: number
  action: Action
  active: boolean
  linked: boolean
  selectedColor: Color
}
