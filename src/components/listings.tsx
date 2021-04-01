//react router dom
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "../utils/axios";

import { listingsUrl } from "../utils/utils";

interface ListingCardI {
  pushToDetailRoute: (id: string) => void;
  item: {
    id: string,
    title: string;
    description: string;
  };
}

//lstings card jsx
const ListingCard = ({
  pushToDetailRoute,
  item,
}: ListingCardI): JSX.Element => (
  <section className="listing-card" onClick={() =>pushToDetailRoute(item.id)}>
    <h3>{item.title}</h3>
    <p>{item.description}</p>
    <h6>Price: {`1500$`}</h6>
  </section>
);

export const Listings = () => {
  //pagination
  const [page, setPage] = useState<any>(0);
  const [rowsPerPage] = useState<any>(9);
  const [listings, setListings] = useState<any>([]);

  const { push } = useHistory();

  useEffect(() => {
    

    axios.get(listingsUrl).then((response) => {
      debugger;
      setListings(response.data.data);
    });
  }, []);

  const pushToDetailRoute = (id: string) => {
    push(`/detail/${id}`);
  };

  const nextPage = () => {
    setPage((page: number) => page + 1);
  };
  const prevPage = () => {
    setPage((page: number) => page - 1);
  };

  return (
    <div className="listings">
      <section className="nav">
        <h1>Listings</h1>
        <section className="right-side">
          <select>
            <option value="">Category</option>
            <option>First option</option>
            <option>First option</option>
            <option>First option</option>
          </select>
          <button onClick={() => push("/addListing")}>Add New Listings</button>
        </section>
      </section>
      <section className="listings-grid">
        {listings
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((item: any) => (
            <ListingCard item={item} pushToDetailRoute={pushToDetailRoute} />
          ))}
      </section>
      <section className="pagination">
        <button onClick={prevPage} disabled={page <= 0}>
          Prev
        </button>
        <p>Page: {page + 1}</p>
        <button
          onClick={nextPage}
          disabled={page >= dummyData.length / rowsPerPage - 1}
        >
          Next
        </button>
      </section>
    </div>
  );
};

const dummyData = [
  {
    title: "Title",
    description: "THis si the description for that things....",
  },
  {
    title: "Titleqwe",
    description: "THis si the description for that things....",
  },
  {
    title: "Title",
    description: "THis si the description for that things....",
  },
  {
    title: "Titleqwe",
    description: "THis si the description for that things....",
  },
  {
    title: "Title",
    description: "THis si the description for that things....",
  },
  {
    title: "Title54",
    description: "THis si the description for that things....",
  },
  {
    title: "Title6",
    description: "THis si the description for that things....",
  },
  {
    title: "Title4",
    description: "THis si the description for that things....",
  },
  {
    title: "Title",
    description: "THis si the description for that things....",
  },
  {
    title: "Title2",
    description: "THis si the description for that things....",
  },
  {
    title: "Title2",
    description: "THis si the description for that things....",
  },
  {
    title: "Title2",
    description: "THis si the description for that things....",
  },
  {
    title: "Title54",
    description: "THis si the description for that things....",
  },
  {
    title: "Title6",
    description: "THis si the description for that things....",
  },
  {
    title: "Title4",
    description: "THis si the description for that things....",
  },
  {
    title: "Title",
    description: "THis si the description for that things....",
  },
  {
    title: "Title2",
    description: "THis si the description for that things....",
  },
  {
    title: "Title2",
    description: "THis si the description for that things....",
  },
  {
    title: "Title2",
    description: "THis si the description for that things....",
  },
];
