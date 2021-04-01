import { SyntheticEvent, useRef } from "react";
import axios from "../utils/axios";
import { useHistory, useParams } from "react-router-dom";

import { addBidsurl } from "../utils/utils";

export const AddBid: React.FC = () => {
  const amountRef = useRef<HTMLInputElement>(null);

  const { listingId }: any = useParams();
  //usehistory
  const { push } = useHistory();
  const onFormHandler = (e: SyntheticEvent) => {
    e.preventDefault();

    const amount: any = amountRef?.current?.value;
    const user = localStorage.getItem("user");
    const userId = user ? JSON.parse(user).user.id : "";
    const data = {
      amount: parseInt(amount),
      userId,
      listingId,
    };
    axios
      .post(addBidsurl, data)
      .then((response) => {
        alert("bids added successfully");
        push(`/detail/${listingId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="add-bid">
      <form onSubmit={onFormHandler}>
        <h3>Add New Bid</h3>
        <input type="number" placeholder="amount" ref={amountRef} required />
        <button type="submit">Add New Bid</button>
      </form>
    </div>
  );
};
