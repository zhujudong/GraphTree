/**
 * Created by zhujudong on 2019-05-05.
 */
import React from 'react';
import {connect} from "dva";

@connect(({base}) => ({base}))
class Right extends React.Component {
  render() {
    const {selectedKey, userId, userName} = this.props.base;
    console.log(userId, userName);
    return (
      <div>{selectedKey ? selectedKey : 'user'}</div>
    );
  }
}

export default Right;
