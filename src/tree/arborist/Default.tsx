import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Tree, TreeApi } from "react-arborist";
import { initialTreeData } from "./Data";
import { Node, rowRenderer } from "./Renderers";
import {
  ItreeData,
  TrenameHandler,
  TmoveHandler,
  TdeleteHandler,
  TcreateHandler,
} from "./types";

/* Customize Appearance */
interface Props {
  treeRef: MutableRefObject<TreeApi<ItreeData> | null | undefined>;
}
const Default = ({ treeRef }: Props) => {
  const [treeData, setTreeData] = useState<readonly ItreeData[] | undefined>(
    initialTreeData
  );

  const onCreate: TcreateHandler = (args) => {
    console.log("log from CREATE_HANDLER", args);
    return null;
  };
  const onRename: TrenameHandler = (args) => {
    console.log("log from RENAME_HANDLER", args);
  };
  const onMove: TmoveHandler = (args) => {
    console.log("log from MOVE_HANDLER", args);
  };
  const onDelete: TdeleteHandler = (args) => {
    console.log("log from DELETE_HANDLER", args);
  };

  return (
    <Tree
      data={treeData}
      ref={treeRef}
      onCreate={onCreate}
      onRename={onRename}
      onMove={onMove}
      onDelete={onDelete}
      renderRow={rowRenderer}
      rowHeight={100}
    >
      {Node}
    </Tree>
  );
};

export default Default;
