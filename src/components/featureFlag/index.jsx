import { useContext } from "react";
import Accordian from "../accordian";
import MoodChange from "../Mode-Change";
// import { RandomColor } from "./components/randomColor";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";
import TabTest from "../customTab/tab-test";


export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <MoodChange />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    // {
    //   key: "showRandomColorGenerator",
    //   component: <RandomColor />,
    // },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView  menus={menus} />,
    },
    {
        key : 'showTabs',
        component : <TabTest/>
    }
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}