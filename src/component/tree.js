/**
 * Created by zhujudong on 2019-05-06.
 */
import React from 'react';
import Item from './item';

const treeData = [{
  key: '1',
  children: [{
    key: '1-1',
    children: [{
      key: '1-1-1'
    }, {
      key: '1-1-2'
    }]
  }, {
    key: '1-2',
    children: [{
      key: '1-2-1'
    }, {
      key: '1-2-2',
      children: [{
        key: '1-2-2-1'
      }]
    }]
  },{
    key: '1-3',
    children: [{
      key: '1-3-1'
    }, {
      key: '1-3-2',
      children: [{
        key: '1-3-2-1'
      },{
        key: '1-3-2-2'
      }]
    }]
  }]
}];

/*
* 样式名，不同位置border展示不同
* */
const bt = {
  nb: 'noBorder',
  lb: 'leftBorder',
  rb: 'rightBorder',
  mb: 'middleBorder'
};

const getPosition = (curr, total) => {
  if (total <= 1) return bt.nb;
  if (curr === 0) return bt.lb;
  if (curr === total - 1) return bt.rb;
  return bt.mb
};


class Tree extends React.Component {

  renderTree = (treeData, isRoot) => {
    const l = treeData.length;
    return treeData.map((item, index) =>
      <Item
        id={item.key}
        key={item.key}
        isRoot={isRoot}
        borderClass={getPosition(index, l)}
      >
        {item.children ? this.renderTree(item.children, false) : null}
      </Item>
    )
  };


  render() {

    return (
      this.renderTree(treeData, true)
    )
  }
}

export default Tree;
