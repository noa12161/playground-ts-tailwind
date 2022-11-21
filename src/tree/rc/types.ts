import { NodeDragEventParams } from "rc-tree/lib/contextTypes";
import { EventDataNode } from "rc-tree/lib/interface";
import { Key } from "react";

export interface ItreeData {
  title: string;
  key: string;
  children?: ItreeData[];
  isLeaf?: boolean;
}

export interface Iloop {
  _level: number;
  _preKey?: string;
  _tns?: ItreeData[];
}

export type OnDrop = (
  info: NodeDragEventParams<ItreeData, HTMLDivElement> & {
    dragNode: EventDataNode<ItreeData>;
    dragNodesKeys: Key[];
    dropPosition: number;
    dropToGap: boolean;
  }
) => void;
