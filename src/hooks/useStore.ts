import { TranslateState, ActionTranslateType, ActionTranslate, Languages, AutoLanguage, FromLanguage} from '../types.d.ts';
import { useReducer } from 'react';

const initialState: TranslateState = {
    fromLanguage: "auto",
    toLanguage: "en",
    input: "",
    result: "",
    loading: false
  }
  
function reducer(state: TranslateState, action: ActionTranslateType): TranslateState{
  const {type} = action;

  switch(type){
    case ActionTranslate.changeFromLanguage:{
      if(state.fromLanguage === action.payload) return state;
      const loading = state.input !== "";
        return{
          ...state,
          fromLanguage: action.payload,
          result: "",
          loading
        }

    }
    case ActionTranslate.changeToLanguage:{
      if(state.fromLanguage === action.payload) return state;
      const loading = state.input !== "";
        return{
          ...state,
          toLanguage: action.payload,
          result: "",
          loading
        }
    }
    case ActionTranslate.insertInput:{
      return {
        ...state,
        input: action.payload,
        loading: action.payload !== "",
        result: ""
      }
    }
    case ActionTranslate.interchangeLanguages:{
      if(state.fromLanguage == "auto") return state;
      return {
        ...state,
        toLanguage: state.fromLanguage,
        fromLanguage: state.toLanguage
      }
    }
    case ActionTranslate.setResult:{
      return {
        ...state, 
        result: action.payload, 
        loading: false
      }
    }
    
  }
}

export default function useStore(){
  const [{
    fromLanguage,
    toLanguage,
    input,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState);

  function changeFromLanguage(newLanguage: FromLanguage){
    dispatch({type: ActionTranslate.changeFromLanguage, payload: newLanguage})
  }

  function changeToLanguage(newLanguage: Languages){
    dispatch({type: ActionTranslate.changeToLanguage, payload: newLanguage})
  }

  const changeInput = (newInput: string) => dispatch({type:ActionTranslate.insertInput, payload: newInput}); 

  const setResult = (result: string) => dispatch({type:ActionTranslate.setResult, payload:result});
  
  const interchangeLanguages = () => dispatch({type:ActionTranslate.interchangeLanguages});

  return {
    fromLanguage,
    toLanguage,
    input,
    result,
    loading,
    changeFromLanguage,
    changeToLanguage,
    changeInput,
    setResult,
    interchangeLanguages
  }
}