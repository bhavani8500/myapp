import Countries from "./countries";
import Counter from "./counter";
import Todolist from "./Todolist";
function App()
{
  return(
    <div className="mybox">
        <h1>Welcome to ReactJs Edupoly</h1>
        <Counter></Counter>
        <Todolist></Todolist>
        <Countries></Countries>
    </div>
  );
}
export default App;