import axios from "axios";

const BUILD_DL_FORM = "BUILD_DL_FORM";
const SEND_DL_FORM="SEND_DL_FORM";
// const GET_USER_INFO="GET_USER_INFO";


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
    type: BUILD_DL_FORM,
    payload: input
  }
}

export function submitDLForm(e){
  console.log(e)
  return{
    type: SEND_DL_FORM,
    payload: axios.post('/api/dlform', {e})
  }
}

// export function getUserInfo (userdata){
//   return {
//     type: GET_USER_INFO,
//     payload: userdata
//   }
// }


export default function dlReducer(state = initialState, action){
  // console.log(initialState)
  switch(action.type){
    case BUILD_DL_FORM:
      return{...state, [action.payload.target.name]:action.payload.target.value};
    // case GET_USER_INFO:
    // return{...state, [first_name:first_name, last_name:last_name]}
    case SEND_DL_FORM:
    return {...state}
    default:
        return state;
  }
}

