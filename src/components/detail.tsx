import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "../utils/axios";
import { listingsUrl } from "../utils/utils";

const Comments = () => (
  <section className="comment">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
  </section>
);

interface Listing {
  title: string;
  price: number;
  description: string;
  createdAt: string;
}

export const Detail: React.FC = () => {
  let params = useParams();
  const { push } = useHistory();
  const [listing, setListing] = useState<Listing | null>(null);

  let { id }: any = params;
  useEffect(() => {
    const apiUrl = `${listingsUrl}/${id}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setListing(response.data.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);
  return (
    <div className="detail">
      <h1>Lisitng Detail</h1>{" "}
      <section className="right-side-btn">
        <button onClick={() => push(`/addbid/${id}`)}>Add New Bid</button>
      </section>
      <section className="listing-detail">
        <h2>Title: {listing?.title}</h2>
        <p>Description: {listing?.description}</p>
        <h6>Price: {listing?.price}</h6>
      </section>
      <h2>Comments</h2>
      <section className="comments">
        {Array(5)
          .fill(0)
          .map((_) => (
            <Comments />
          ))}
      </section>
    </div>
  );
};
