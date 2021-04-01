import { SyntheticEvent, useRef } from "react";
import axios from "../utils/axios";
import { useHistory } from "react-router-dom";

import { listingsUrl } from "../utils/utils";

export const AddListing: React.FC = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  //usehistory
  const { push } = useHistory();
  const onFormHandler = (e: SyntheticEvent) => {
    e.preventDefault();

    const title = titleRef?.current?.value;
    const description = descriptionRef?.current?.value;
    const price: any = priceRef?.current?.value;
    const user = localStorage.getItem("user");
    const userId = user ? JSON.parse(user).user.id : "";
    const data = {
      title,
      description,
      price: parseInt(price),
      userId,
    };
    axios
      .post(listingsUrl, data)
      .then((response) => {
        alert("listing added successfully");
        push("/listings");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="add-bid">
      <form onSubmit={onFormHandler}>
        <h3>Add New Listing</h3>
        <input type="text" placeholder="title" ref={titleRef} required />
        <input type="text" placeholder="description" ref={descriptionRef} required />
        <input type="number" placeholder="price" ref={priceRef} required />
        <button type="submit">Add New Listing</button>
      </form>
    </div>
  );
};
