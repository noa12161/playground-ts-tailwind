import { DragPreviewProps, NodeRendererProps } from "react-arborist";
import { ItreeData, TrowRenderer } from "./types";
import defaultAvatar from "../../assets/images/default_avatar.png";

export const Node = ({
  node,
  style,
  dragHandle,
}: NodeRendererProps<ItreeData>) => {
  /* This node instance can do many things. See the API reference. */
  console.log(`name:${node.data.name} id:${node.data.id}`, node.rowIndex);
  return (
    <div
      style={style}
      ref={dragHandle}
      onClick={() => node.toggle()}
      className={`${node.willReceiveDrop ? "bg-red-200" : ""} ${
        node.isSelected ? "bg-red-200" : ""
      } h-full flex items-center`}
    >
      <div className="w-12 h-12">
        <img src={defaultAvatar} alt="avatar" />
      </div>
      <div>{node.data.name}</div>
      {/* {node.isLeaf ? "🍁" : "🗀"} {node.data.name} */}
    </div>
  );
};

export const rowRenderer: TrowRenderer<ItreeData> = (props) => {
  console.log("props from row renderer", props.attrs.style);
  console.log("is leaf", props.node.isLeaf);
  const leftPadding = props.node.level * 24;
  const rowIndex = props.node.rowIndex ? props.node.rowIndex : 0;
  return (
    <div
      // style={{
      //   position: "absolute",
      //   left: "0px",
      //   top: `${rowIndex * 100}px`,
      //   height: "100px",
      //   width: "100%",
      // }}
      style={{
        ...props.attrs.style,
        height: props.node.isLeaf ? "100px" : "50px",
      }}
    >
      <div
        style={{
          paddingLeft: `${props.node.level * 24}px`,
        }}
        className={`flex items-center`}
      >
        <div className="w-12 h-12">
          <img src={defaultAvatar} alt="avatar" />
        </div>
        <div>{props.node.data.name}</div>
      </div>
    </div>
  );
};

export const DragPreview = (props: DragPreviewProps) => {
  console.log(props);
  return props.isDragging ? (
    <div
      style={{
        position: "absolute",
        top: props.mouse?.y,
        left: props.mouse?.x,
        width: "100px",
        height: "200px",
        background: "red",
      }}
    ></div>
  ) : (
    <div></div>
  );
};
