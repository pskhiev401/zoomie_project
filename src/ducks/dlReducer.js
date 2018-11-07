import axios from "axios";

const BUILD_DL_FORM = "BUILD_DL_FORM";
const SEND_DL_FORM = "SEND_DL_FORM";
const GET_USER_INFO = "GET_USER_INFO";
const SEND_FINAL_DL = "SEND_FINAL_DL";

const initialState = {
  //CAPT HINDSIGHT: WE SHOULD HAVE JUST USED REQ.USER.ID INSTEAD OF PASSING
  user_id: "",
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
  voter_reg: "",
  user_email: ""
};

export function handleChange(input) {
  console.log(input);
  return {
    type: BUILD_DL_FORM,
    payload: input
  };
}

export function submitDLForm(e) {
  console.log(e);
  return {
    type: SEND_DL_FORM,
    payload: axios.post("/api/dlform", { e })
  };
}

export function finalDLSubmit(body) {
  console.log(body);
  return {
    type: SEND_FINAL_DL,
    payload: axios.put(`/api/finalDL/${body.user_id}`, { body })
  };
}

export function getUserInfo(userdata) {
  console.log(userdata);
  return {
    type: GET_USER_INFO,
    payload: userdata
  };
}

export default function dlReducer(state = initialState, action) {
  console.log(initialState);
  switch (action.type) {
    case BUILD_DL_FORM:
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      };
    case GET_USER_INFO:
      console.log(action.payload);
      return {
        ...state,
        user_id: action.payload.user_id,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        dob: action.payload.dob,
        sex: action.payload.sex,
        ssn: action.payload.ssn,
        dl_type: action.payload.dl_type,
        dl_class: action.payload.dl_class,
        dl_exp: action.payload.dl_exp,
        dl_num: action.payload.dl_num,
        address_1: action.payload.address_1,
        address_2: action.payload.address_2,
        city: action.payload.city,
        state: action.payload.state,
        zipcode: action.payload.zipcode,
        hair: action.payload.hair,
        eyes: action.payload.eyes,
        height: action.payload.height,
        weight: action.payload.weight,
        organ_donor: action.payload.organ_donor,
        voter_reg: action.payload.voter_reg,
        user_email: action.payload.user_email
      };
    case SEND_DL_FORM:
      return { ...state };
    case `${SEND_FINAL_DL}_FULFILLED`:
    console.log(action.payload)
      return { ...state };
    default:
      return state;
  }
}
