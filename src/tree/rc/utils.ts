import { Iloop, ItreeData } from "./types";

export const loop = (
  data: ItreeData[],
  key: string,
  callback: (item: ItreeData, index: number, arr: ItreeData[]) => void
) => {
  data.forEach((item, index, arr) => {
    if (item.key === key) {
      callback(item, index, arr);
      return;
    }
    if (item.children) {
      loop(item.children, key, callback);
    }
  });
};

export const generateData = (
  x = 3,
  y = 2,
  z = 1,
  treeData: ItreeData[] = []
): ItreeData[] => {
  function _loop({ _level, _preKey, _tns }: Iloop) {
    const preKey = _preKey || "0";
    const tns = _tns || treeData;

    const children = [];

    // 몇개의 노드를 생성할지 결정
    for (let i = 0; i < x; i++) {
      const key = `${preKey}-${i}`;
      tns.push({ title: `${key}-label`, key: `${key}-keyssss` });

      // y = 몇번째 노드까지 children이 있는 노드를 정하는 키값
      // eg) x=3, y=2 === 3개의 노드중 2개의 노드는 children을 갖음
      if (i < y) {
        children.push(key);
      }
    }

    // 노드의 dept를 제한 함.
    if (_level < 0) {
      return tns;
    }

    const __level = _level - 1;
    children.forEach((key, index) => {
      tns[index].children = [];
      return _loop({
        _level: __level,
        _preKey: key,
        _tns: tns[index].children,
      });
    });

    return null;
  }
  _loop({ _level: z });
  return treeData;
};

// export const treeData = generateData();
