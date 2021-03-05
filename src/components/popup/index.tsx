import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {IProps, IState} from './interface'
import './index.scss'

class BcPopup extends Component<IProps, IState> {

  state = {
  }

  componentDidMount () { }

  render () {
    const {show, showChangeFn} = this.props

    const popupDefaultHeight = '50%'

    let popupHeight = popupDefaultHeight

    const overlayStyle: React.CSSProperties = {
      visibility: show ? 'visible' : 'hidden'
    }

    const popupStyle: React.CSSProperties = {
      visibility: show ? 'visible' : 'hidden',
      height: show ? popupHeight : '0%',
    }

    return (
      <View className='bc-popup__container'>
        <View className='bc-overlay' style={overlayStyle} onClick={showChangeFn}/>
        <View className='bc-popup bc-popup--bottom bc-popup--round' style={popupStyle}></View>
      </View>
    )
  }
}

export default BcPopup