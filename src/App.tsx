import React from "react";
import Layouts from "./components/layout/Layouts";
import Default from "./tree/arborist/Default";
import Wrapper from "./tree/arborist/Wrapper";
import RC_Default from "./tree/rc/RC_Default";

function App() {
  // rc-tree
  // return <RC_Default />;

  // arborist
  // return <Wrapper />;

  return (
    <div className="bg-white grow flex flex-col">
      <Layouts></Layouts>
    </div>
  );
}

export default App;
