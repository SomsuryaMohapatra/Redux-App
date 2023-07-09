import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/actionCreator";

export default function Shop() {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  return (
    <div class="d-grid gap-2 col-3 mx-auto">
      {/* <h4>Deposit / Withdraw Money</h4>
      <button
        class="btn btn-primary"
        type="button"
        onClick={() => {
          dispatch(actionCreators.depositMoney(100));
        }}
      >
        Deposit
      </button>
      <button
        class="btn btn-primary"
        type="button"
        onClick={() => {
          dispatch(actionCreators.withdrawMoney(100));
        }}
      >
        Withdraw
      </button> */}
      <h4>Deposit / Withdraw Money</h4>
      <button
        class="btn btn-primary"
        type="button"
        onClick={() => {
          actions.depositMoney(100);
        }}
      >
        Deposit
      </button>
      <button
        class="btn btn-primary"
        type="button"
        onClick={() => {
          actions.withdrawMoney(100);
        }}
      >
        Withdraw
      </button>
    </div>
  );
}
