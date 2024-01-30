import { useDispatch, useSelector } from "react-redux";
import { GET_USER_DATA } from "./ReducerComponents/ActionsCreator";

function App() {
  const UserData = useSelector((store) => store);
  const dispatch = useDispatch()
  return (
    <>
      {console.log(UserData)}
      
    {UserData.map((cv,idx)=>{
        return <h2>{cv.first_name}</h2>
      })}
      <button onClick={()=>dispatch(GET_USER_DATA())}>Get user Data</button>
    </>
  );
}

export default App;
