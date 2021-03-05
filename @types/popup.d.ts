import { ComponentClass } from 'react'

export interface BcPopupProps {
  show: boolean,
  showChangeFn: ()=>void
}

declare const BcPopup: ComponentClass<BcPopupProps>

export default BcPopup
