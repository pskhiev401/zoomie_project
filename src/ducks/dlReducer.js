import axios from "axios";

const BUILD_DL_FORM = "BUILD_DL_FORM";
const SEND_DL_FORM="SEND_DL_FORM";
// const GET_AUTH_ID="GET_AUTH_ID";


const initialState = {
  // auth_id: "",
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

// export function getUserAuthId(auth_id){
//   return {
//     type: GET_AUTH_ID,
//     payload: axios.get('/api/getAuthID', {auth_id})
//   }
// }


export default function dlReducer(state = initialState, action){
  // console.log(initialState)
  switch(action.type){
    case BUILD_DL_FORM:
      return{...state, [action.payload.target.name]:action.payload.target.value};
    // case GET_AUTH_ID:
    //   return{...state, auth_id:auth_id}
    case SEND_DL_FORM:
    return {...state}
    default:
        return state;
  }
}

