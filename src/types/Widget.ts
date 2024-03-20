import Action from './Action'
import Color from './Color'
import ImpactType from './ImpactType'

export default interface Widget {
  id: number
  type: ImpactType
  amount: number
  action: Action
  active: boolean
  linked: boolean
  selectedColor: Color
}
