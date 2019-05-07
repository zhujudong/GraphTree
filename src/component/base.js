import React, {Fragment} from 'react';
import styles from './base.css';
import {connect} from "dva";

@connect(({base}) => ({base}))
class BaseLayout extends React.Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'base/sendMsg',
      payload: {
        userName: 'jack',
        userId: '001'
      }
    })
  }

  render() {
    const {header, left, right} = this.props;
    return (
      <Fragment>
        <div className={styles.leftBox}>{left}</div>
        <div className={styles.headerBox}>{header}</div>
        <div className={styles.rightBox}>{right}</div>
      </Fragment>
    );
  }
}

export default BaseLayout;
