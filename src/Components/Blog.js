import BlogList from "./BlogList";
import  useFetch  from "./useFetch";

const Blog = () => {
  
 const {blog, loading , error, errMsg}   = useFetch("http://localhost:8000/comments/")


  return (
    <>
    
    {error && <div>{errMsg}</div>}
    {loading && <div>Loading..</div>}

    <div className="container">
      <div className="row">
        <div className="col-12">
    {blog && <BlogList blogs={blog} />}

        </div>
      </div>
    </div>
    </>
  );
};

export default Blog;
