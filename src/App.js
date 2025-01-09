import Accordian from "./components/accordian/index"
import './App.css';
import { RandomColor } from "./components/randomColor";
import StarRating from "./components/starRating";
import ImageSlider from "./components/imageSlider";
import LoadMoreData from "./components/load-more-button";
import  TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import MoodChange from "./components/Mode-Change"
import ScrollBar from "./components/scroll-indicator/index"
import TabTest from "./components/customTab/tab-test";
import Model from "./components/customModel/model-test";
import GitHubProfile from "./components/gitHubProfile";
import SearchAutocomplete from "./components/search-AutoComplete";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlag from "./components/featureFlag";
import FeatureFlagGlobalState from "./components/featureFlag/context";
import UseFetchHookTest from "./components/useFetch/test";
import UseOutsideClickTest from "./components/outsideClickButton/test"
function App() {
  return (
    
   <div>
    <Accordian/>
    <RandomColor/>
    <StarRating />
     <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    <LoadMoreData/>
    <TreeView menus={menus}/>
    <MoodChange/>
    <ScrollBar url={"https://dummyjson.com/products?limit=100"} />
      <TabTest />
      <Model/>
      <GitHubProfile />
      <SearchAutocomplete />
      <TicTacToe/>
      <FeatureFlagGlobalState>
      <FeatureFlag/>
      </FeatureFlagGlobalState>
      <UseFetchHookTest/>
      <UseOutsideClickTest/>
   </div>
  );
}

export default App;
