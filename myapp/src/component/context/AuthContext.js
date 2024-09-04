import { createContext, useReducer } from "react";

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
      return {...state, counter : state.counter - 1}
    default:
      return state;
  }
}
  const InitialState = {user : null , counter : 1000};

  function ParentAuthComponent({children}){
    const [state,dispatch] = useReducer(Reducer,InitialState);

    return(
        <AuthContext.Provider value = {{state,dispatch}}>
            {children}
        </AuthContext.Provider>
    );
  }
  export default ParentAuthComponent;

