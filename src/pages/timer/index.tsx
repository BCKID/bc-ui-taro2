import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Timer from "../../components/timer/timer";
import "./index.scss";

class Index extends Component {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  state = {
    startTime: new Date().getTime(),
    endTime: new Date().getTime() + 20000
  };

  componentDidMount() {}

  tickHandler(time) {
    console.log(time);
  }

  timeupHandler() {
    console.log("timeup");
  }

  render() {
    const { startTime, endTime } = this.state
    return (
      <View className="">
        <Timer
          startTime={startTime}
          endTime={endTime}
          onTick={this.tickHandler}
          onTimeup={this.timeupHandler}
        />
      </View>
    );
  }
}

export default Index;
