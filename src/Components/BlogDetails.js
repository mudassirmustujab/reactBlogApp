import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    blog: data,
    loading,
    error,
  } = useFetch(`http://localhost:8000/comments/${id}`);
  // const {topic, content, author} = data
  // console.log(`data ${content}`);

  const handleDelete = () => {
    fetch(`http://localhost:8000/comments/${id}`, { method: "DELETE" }).then(
      (res) => {
        navigate("/");
      }
    );
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 py-5">
            Blog Details {id}
            {/* {data && <div>{console.log( data)}</div>}
            {loading}
            {error} */}
            {loading && <div>Loading...</div>}
            {error && <div>error</div>}
            {data && <h3 className="mt-2">{data.topic}</h3>}
            {data && <div className="mt-1">{data.content}</div>}
            {data && <div className="mt-2">{data.author}</div>}
            <button
              className="btn btn-secondary mt-3"
              onClick={() => {
                handleDelete();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
