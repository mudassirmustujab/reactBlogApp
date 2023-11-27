import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [topic, setTopic] = useState();
  const [content, setContent] = useState();
  const [author, setAuthor] = useState();

  const [err, setErr] = useState(false);
  const [submit, setSubmit] = useState("false");

  const navigate = useNavigate()

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
    console.log(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };


  return (
    <div>
      <form
        className="w-50 mx-auto pt-5"
        onSubmit={(e) => {
          e.preventDefault();
          const inpObj = {
            topic,
            content,
            author,
          };
          setSubmit(true)
          fetch("http://localhost:8000/comments/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inpObj),
          })
            .then((res) => {
              if (!res.ok) {
                throw Error("Blog not Added");
              } else {
                console.log("blog added", res);
                setSubmit(false);
                navigate("/")
              }
            })
            .catch((err) => {
              setErr(err.message);
            });

          console.log("inp obj " + inpObj.author);
        }}
      >
        <div>{err}</div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Topic
          </label>
          <input
            type="text"
            className="form-control topic"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder=":)"
            onChange={handleTopicChange}
            value={topic}
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Content
          </label>
          <textarea
            type="text"
            className="form-control content"
            id="exampleInputPassword1"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
            rows={5}
            placeholder="Enter Content"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control author"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleAuthorChange}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Properly formatted
          </label>
        </div>
        <button
          type="submit"
          className="btn text-light"
          style={{ backgroundColor: "#D0A2F7" }}
        > 
        {/*not submit means submit is not true*/}   
        {!submit &&  <button className="btn" disabled={true}>Submitting</button>}  
          {submit && <button  className="btn" disabled={false}>Submit</button>}
        
        </button>
        {submit }
      </form>
    </div>
  );
};

export default Create;
