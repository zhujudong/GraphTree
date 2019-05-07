/**
 * Created by zhujudong on 2019-05-05.
 */
import React from 'react';
import {Button} from "antd";
import {connect} from "dva";

const divStyle = {
  float: 'right',
  width: '300px',
  marginTop: '15px'
};
const btnStyle = {
  marginRight: '30px'
};

@connect(({base}) => ({base}))
class Header extends React.Component {
  onSelect = (selectedKey) => {
    this.props.dispatch({
      type:'base/sendMsg',
      payload:{
        selectedKey
      }
    })
  };

  render() {
    const {selectedKey = 'user'} = this.props.base;
    console.log(selectedKey);
    return (
      <div style={divStyle}>
        <Button type={selectedKey === 'user' ? 'primary' : 'default'}
                style={btnStyle}
                onClick={() => this.onSelect('user')}
        >User</Button>
        <Button type={selectedKey === 'role' ? 'primary' : 'default'}
                style={btnStyle}
                onClick={() => this.onSelect('role')}
        >Role</Button>
        <Button type={selectedKey === 'group' ? 'primary' : 'default'}
                style={btnStyle}
                onClick={() => this.onSelect('group')}
        >Group</Button>
      </div>
    );
  }
}

export default Header;
