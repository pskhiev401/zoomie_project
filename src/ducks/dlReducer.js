import axios from "axios";

const UPDATE_DL_FORM = "UPDATE_DL_FORM";
const SEND_DL_FORM="SEND_DL_FORM";

const initialState = {
  first_name: "",
  last_name: "",
  dob: "",
  sex: "",
  ssn: "",
  dl_type: "",
  dl_class: "",
  dl_exp: "",
  dl_num: "",
  address_1: "",
  address_2: "",
  city: "",
  state: "",
  zipcode: "",
  hair: "",
  eyes: "",
  height: "",
  weight: "",
  organ_donor: "",
  voter_reg: ""
};

export function handleChange(input){
  console.log(input)
  return{
    type: UPDATE_DL_FORM,
    payload: input
  }
}

export function submitDLForm(){
  console.log()
  return{
    type: SEND_DL_FORM,
    payload: axios.post('/api/dlform')
  }
}

export default function dlReducer(state = initialState, action){
  switch(action.type){
    case UPDATE_DL_FORM:
      return{...state, [action.payload.target.name]:action.payload.target.value};
    case SEND_DL_FORM:
    return {...state }
    default:
        return state;
  }
}

