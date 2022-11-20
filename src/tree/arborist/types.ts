import { ElementType, HTMLAttributes, ReactElement } from "react";
import {
  CreateHandler,
  RenameHandler,
  MoveHandler,
  DeleteHandler,
  NodeApi,
} from "react-arborist";

// 트리 구조.
export interface ItreeData {
  id: string;
  name: string;
  children?: ItreeData[];
}

// 트리 메서드 타입
export type TcreateHandler = CreateHandler<ItreeData>;
export type TrenameHandler = RenameHandler<ItreeData>;
export type TmoveHandler = MoveHandler<ItreeData>;
export type TdeleteHandler = DeleteHandler<ItreeData>;

// 렌더링 컴포넌트 타입
export declare type RowRendererProps<T> = {
  node: NodeApi<T>;
  innerRef: (el: HTMLDivElement | null) => void;
  attrs: HTMLAttributes<any>;
  children: ReactElement;
};
export type TrowRenderer<T> = ElementType<RowRendererProps<T>> | undefined;
