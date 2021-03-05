import Taro, { Component, Config } from '@tarojs/taro'
import { Button, View } from '@tarojs/components'
import BcPopup from '../../components/popup'
import './index.scss'

class Index extends Component {

  config: Config = {
    navigationBarTitleText: 'Popup'
  }

  state = {
    popupShow: false
  }

  componentDidMount () { }

  popupShowChange() {
    this.setState({
      popupShow: !this.state.popupShow
    })
  }

  render () {
    const {popupShow} = this.state

    return (
      <View>
        <Button onClick={this.popupShowChange.bind(this)}>Click</Button>
        <BcPopup show={popupShow} showChangeFn={this.popupShowChange.bind(this)}/>
      </View>
    )
  }
}

export default Index