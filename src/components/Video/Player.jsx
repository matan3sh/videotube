import React from "react";
import { connect } from "react-redux";
import { setOffset } from "../../store/actions";

const Player = ({ video, offSet, setOffset }) => {
  const pickQuote = (offSet) => setOffset(offSet);

  return (
    <>
      <iframe
        className="card-img-top"
        src={`https://www.youtube.com/embed/${video.youtubeId}?start=${offSet}&autoplay=1`}
        alt="Card Video cap"
        allow="autoplay; encrypted-media"
        title="thumb-vid"
      />
      {video.quotes.map((quote, index) => (
        <div
          key={index}
          className="quote-card text-center pointer"
          onClick={() => {
            pickQuote(quote.offset);
          }}
        >
          <i className="fas fa-quote-right" /> {quote.text}{" "}
          <i className="fas fa-quote-left" />
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  video: state.videoApp.video,
  offSet: state.videoApp.offSet,
});

const mapDispatchToProps = {
  setOffset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
