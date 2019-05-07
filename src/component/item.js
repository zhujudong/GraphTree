/**
 * Created by zhujudong on 2019-05-06.
 */
import React from 'react';
import styles from "@/component/tree.css";

function BorderDom(props) {
  let {borderClass, width} = props;
  switch (borderClass) {
    case 'leftBorder':
      width = width / 2 ;
      break;
    case 'rightBorder':
      width = width / 2 + 1;
      break;
    case 'middleBorder':
      break;
    case 'noBorder':
      width = 0;
      break;
  }
  return (
    <div className={styles[borderClass]} style={{width: width}}></div>
  )
}

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.headerDom = ref => this.hdom = ref;
    this.state = {
      headerWidth: 0
    }
  }


  componentDidMount() {
    this.setState({
      headerWidth: this.hdom.clientWidth
    });
  }

  render() {
    const {children, isRoot, borderClass,id} = this.props;
    return (
      <div className={styles.container}>
        <BorderDom
          borderClass={borderClass}
          width={this.state.headerWidth}
        />
        <div className={styles.header} ref={this.headerDom}>
          <div className={isRoot ? styles.treeItem : `${styles.treeItem} ${styles.arrow}`}>
            <p>{`编号：${id}`}</p>
            <p>{`买方：`}</p>
            <p>{`卖方：`}</p>
            <p>{`金额：`}</p>
            <p>{`到期日：`}</p>
          </div>
        </div>
        {
          children ?
            <div className={styles.children}>
              {children}
            </div>
            : null
        }
      </div>
    )
  }

}
