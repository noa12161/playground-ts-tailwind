import React, { useRef } from "react";
import { TreeApi } from "react-arborist";
import Default from "./Default";
import { ItreeData } from "./types";

const Wrapper = () => {
  const treeRef = useRef<TreeApi<ItreeData> | null | undefined>();

  const selectAll = () => {
    if (!treeRef.current) return;
    const tree = treeRef.current;

    tree.selectAll();
  };

  const deSelectAll = () => {
    if (!treeRef.current) return;
    const tree = treeRef.current;

    tree.deselectAll();
  };

  return (
    <div>
      <button onClick={selectAll}>전체 선택</button>
      <button onClick={deSelectAll}>전체 해제</button>
      <Default treeRef={treeRef} />
    </div>
  );
};

export default Wrapper;
