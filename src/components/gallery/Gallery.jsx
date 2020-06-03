import React, { useEffect, useState, useRef } from "react";
import api from "../../api/api";
import Card from "../card/Card";
import _ from "lodash";
import "./Gallery.scss";

export default function Gallery({ link }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [loadMore, setLoadMore] = useState(true);
  const [sort, setSort] = useState("");
  const [sortType, setSortType] = useState("");

  const galleryRef = useRef();
  // fetch data
  useEffect(() => {
    setLoading(true);
    api.get(link).then((res) => {
      setLoading(false);
      setList(res.data);
    });
  }, [link]);
  useEffect(() => {
    if (sortType === "d") setList(_.sortBy(list, [sort]).reverse());
    else if (sortType === "") setList(_.sortBy(list, ["id"]));
    else setList(_.sortBy(list, [sort]));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, sortType]);
  let SortData = (value) => {
    if (value === sort) {
      if (sortType === "") {
        setSort(value);
        setSortType("d");
      } else if (sortType === "d") {
        setSortType("a");
      } else if (sortType === "a") {
        setSort("");
        setSortType("");
      }
    } else {
      setSort(value);
      setSortType("d");
    }
  };
  // load more when the uder scrolled to end
  useEffect(() => {
    let tempNode = galleryRef.current;
    tempNode.addEventListener("scroll", handleScroll);
    return () => tempNode.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [galleryRef]);

  // fetch more data
  let fetchMore = () => {
    setLoading(true);
    if (link.includes("?"))
      api
        .get(link + `&page=${page}`)
        .then((res) => {
          setLoading(false);

          if (res.data.length === 0) {
            setLoadMore(false);
            setLoading(false);
          } else {
            setList((list) => [...list, ...res.data]);
            setSort("");
            setSortType("");
            setPage(page + 1);
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    else
      api
        .get(link + `?page=${page}`)
        .then((res) => {
          setLoading(false);
          if (res.data.length === 0) {
            setLoading(false);
            setLoadMore(false);
          } else {
            setList((list) => [...list, ...res.data]);
            setPage(page + 1);
          }
        })
        .catch(() => setLoading(false));
  };
  function handleScroll() {
    if (
      galleryRef.current.scrollHeight <=
      galleryRef.current.scrollTop + galleryRef.current.offsetHeight + 10
    ) {
      if (loadMore) {
        setLoading(true);
        fetchMore();
      }
    }
  }

  return (
    <>
      <div className="gallery-sort">
        Sort by:{" "}
        <div onClick={() => SortData("abv")}>
          Abv &nbsp;{" "}
          <span
            style={{
              transition: "all .2s",
              display: sort === "abv" ? "inline" : "none",
              transform: sortType === "d" ? "rotate(90deg)" : "rotate(-90deg)",
            }}
          >
            >
          </span>
        </div>
        <div onClick={() => SortData("name")}>
          Name &nbsp;{" "}
          <span
            style={{
              transition: "all .2s",
              display: sort === "name" ? "inline" : "none",
              transform: sortType === "d" ? "rotate(90deg)" : "rotate(-90deg)",
            }}
          >
            >
          </span>
        </div>
      </div>
      <div className="gallery" ref={galleryRef}>
        {list.map((item, i) => (
          <Card key={item.id + "data" + item.name + i} details={item} />
        ))}
        {loading ? <div className="loader" /> : null}
      </div>
    </>
  );
}
