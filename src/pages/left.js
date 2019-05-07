/**
 * Created by zhujudong on 2019-05-05.
 */
import React, {Fragment} from 'react';
import {Menu} from 'antd';
import {connect} from "dva";

@connect(({base}) => ({base}))
class Left extends React.Component {
  onSelect = ({key}) => {
    this.props.dispatch({
      type: 'base/sendMsg',
      payload: {
        selectedKey: key
      }
    })
  };

  render() {
    const {userId, userName,selectedKey='user'} = this.props.base;
    console.log('selectedKey',selectedKey);
    return (
      <Fragment>
        <div>
          <h3>{`userName:${userName}`}</h3>
          <h3>{`userId:${userId}`}</h3>
        </div>
        <Menu
          defaultSelectedKeys={['user']}
          selectedKeys={[selectedKey]}
          onSelect={this.onSelect}
        >
          <Menu.Item key='user'>User</Menu.Item>
          <Menu.Item key='role'>Role</Menu.Item>
          <Menu.Item key='group'>Group</Menu.Item>
        </Menu>
      </Fragment>
    );
  }
}

export default Left;
