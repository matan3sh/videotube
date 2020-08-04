import React, { useState } from "react";
import { connect } from "react-redux";
import { searchVideo } from "../../store/actions";

const Search = ({ searchVideo }) => {
  const [txt, setTxt] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchVideo(txt);
  };

  return (
    <>
      <form onSubmit={onSubmit} style={{ width: "100%" }}>
        <input
          type="text"
          name="txt"
          placeholder="Search Song..."
          value={txt}
          onChange={(e) => {
            setTxt(e.target.value);
            searchVideo(txt);
          }}
        />
      </form>
    </>
  );
};

const mapDispatchToProps = {
  searchVideo,
};

export default connect(null, mapDispatchToProps)(Search);
