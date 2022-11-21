import Tree from "rc-tree";
import "rc-tree/assets/index.css";
import { AllowDrop } from "rc-tree/lib/Tree";
import React, { useState } from "react";
import { ItreeData, OnDrop } from "./types";
import { generateData, loop } from "./utils";

const allowDrop: AllowDrop<ItreeData> = ({
  dragNode,
  dropNode,
  dropPosition,
}) => {
  if (!dropNode.children) {
    if (dropPosition === 0) return false;
  }
  return true;
};

const RC_Default = () => {
  const [treeData, setTreeData] = useState(generateData());
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [expandedKeys, setExpandedKeys] = useState([
    "0-0-key",
    "0-0-0-key",
    "0-0-0-0-key",
  ]);

  const onDragStart = (info: any) => {
    console.log("start", info);
  };

  const onDragEnter = (props: any) => {
    console.log("enter");
  };

  const onDrop: OnDrop = (info) => {
    console.log("drop", info);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split("-");
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);
    const data = [...treeData];
    console.log({
      infoDropPosition: info.dropPosition,
      calcDropPosition: dropPosition,
    });

    // Find dragObject
    let dragObj: any;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (dropPosition === 0) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        // eslint-disable-next-line no-param-reassign
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.unshift(dragObj);
      });
    } else {
      // Drop on the gap (insert before or insert after)
      let ar: any;
      let i: any;
      loop(data, dropKey, (item, index, arr) => {
        console.log("arr from cb", arr);
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }

    setTreeData(data);
  };

  const onExpand = (expandedKeys: any) => {
    // console.log('onExpand', expandedKeys);
    setExpandedKeys(expandedKeys);
    setAutoExpandParent(false);
  };

  return (
    <div>
      <Tree
        allowDrop={allowDrop}
        // expandedKeys={expandedKeys}
        onExpand={onExpand}
        defaultExpandAll={true}
        // autoExpandParent={autoExpandParent}
        draggable
        onDragStart={onDragStart}
        onDrop={onDrop}
        treeData={treeData}
      />
    </div>
  );
};

export default RC_Default;
