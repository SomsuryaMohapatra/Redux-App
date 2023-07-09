export const depositMoney=(amount)=>{
    return dispatch({
        type:"deposit",
        payload:amount
    });
}
export const withdrawMoney=(amount)=>{
    return dispatch({
        type:"withdraw",
        payload:amount
    });
}