import {NAVIGATE_TO_PAGE,REQUEST_PAYPAL_SECRET_KEY,REQUEST_PAYPAL_SECRET_KEY_SUCEESS } from "../constants";

export const navigateToPage=(page:any)=>{
    return { 
        type: NAVIGATE_TO_PAGE, 
        payload: { page } 
    };
  }

  export const getPaypalSecretKey=()=>{
    return { 
        type: REQUEST_PAYPAL_SECRET_KEY, 
        
    };
  }
  
  export const getPaypalSecretKeySuccess=(payload:any)=>{
    return { 
        type: REQUEST_PAYPAL_SECRET_KEY_SUCEESS, 
        payload
        
    };
  }