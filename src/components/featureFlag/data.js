import Accordion from "../accordian";
import ModeChange from "../Mode-Change";
import { RandomColor } from "../randomColor";
import TicTacToe from "../tic-tac-toe";


const dummyApiResponse = {
    ModeChange: false,
    Accordion: true,
    RandomColor: true,
    TicTacToe: false,
  };
  
  
  function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
      if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
      else reject("Some error occured! Please try again");
    });
  }
  
  export default featureFlagsDataServiceCall;