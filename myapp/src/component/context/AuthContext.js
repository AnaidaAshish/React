import { createContext, useEffect, useReducer } from "react";
import api from "..";

export const AuthContext = createContext();

function Reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
const InitialState = { user: null, counter: 1000 };

function ParentAuthComponent({ children }) {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  useEffect(() => {
    // alert("Page was Refreshed!!");
    async function getCurrentUser(){
      try{
        const response = await api.post("auth/get-current-user")
        console.log(response.data,"data in get current user")
        if(response.data.success){
          dispatch({type:"LOGIN",payload:response.data.userData})
        }
      }catch(error){
        console.log(error)
      }
    }
    getCurrentUser()
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
export default ParentAuthComponent;
