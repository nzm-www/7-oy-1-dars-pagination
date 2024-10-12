import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";

function Home() {
  const [aluboms, setAluboms] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    setLoader(true);
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setAluboms(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoader(false);
      });
  }, [page]);

  const handlePage = (value) => {
    setPage(value);
  };
  return (
    <div className="bg-slate-700 p-10">
      <div className=" bg-white pt-10 px-12 pb-8 pl-20 rounded-3xl">
        <div className="text text-center gap-4 mb-10">
          <h1 className="text-3xl font-mono text-slate-700">Food Blog</h1>
          <p className="text-1xl text-slate-700 ">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit{" "}
            <br /> aut fugit, sed quia consequuntur.
          </p>
        </div>
        <div className="wrapper grid grid-cols-4 gap-5 h-[400px]">
          {loader ? (
            <p className="m-auto ml-[500px] text-6xl">Loading....</p>
          ) : (
            aluboms.map((value, index) => {
              return (
                <div key={index}>
                  <img className="w-[180px] rounded-2xl" src={value.url} />
                </div>
              );
            })
          )}
        </div>
        <div className="pag flex items-center justify-center mt-10">
          <Pagination count={400} color="secondary" onChange={handlePage} />
        </div>
      </div>
    </div>
  );
}
export default Home;
