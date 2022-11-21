import React from "react";

interface Props {
  children: React.ReactNode;
}
const Layouts = ({ children }: Props) => {
  return (
    <div className="flex flex-col grow">
      <div className="header w-full h-14 bg-blue-400 p-2">header</div>
      <div className="body w-full grow flex">
        <div className="sideBar h-full min-w-8 bg-blue-200 p-2">sidebar</div>
        <div className="mainContent grow h-full bg-white p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layouts;
