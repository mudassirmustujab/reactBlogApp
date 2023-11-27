import { React } from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {

  return (
    <div>
      <div style={{ display: "flex" }}>
        {blogs.map((element) => {
          return (
            <div className="justify-content-center col-lg-3 h-auto" key={element.id}>
              <div className="card " style={{ height: "18rem" }}>
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <h1 className="card-title">{element.author}</h1>
                  <p className="card-text">{element.content}</p>

             
                  <small className Name="ms-3">
                    Date
                  </small>
                  <Link  className="btn btn-secondary mt-2" to={`/${element.id}`}>Click</Link>
               
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default BlogList;
