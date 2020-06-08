import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setOffset } from '../../store/actions';

class Player extends React.Component {
  pickQuote = (offSet) => {
    this.props.setOffset(offSet);
  };

  render() {
    const { video, offSet } = this.props;
    return (
      <React.Fragment>
        <iframe
          className='card-img-top'
          src={`https://www.youtube.com/embed/${video.youtubeId}?start=${offSet}&autoplay=1`}
          alt='Card Video cap'
          allow='autoplay; encrypted-media'
        />
        {video.quotes.map((quote, index) => (
          <div
            key={index}
            className='quote-card text-center pointer'
            onClick={() => {
              this.pickQuote(quote.offset);
            }}
          >
            <i className='fas fa-quote-right' /> {quote.text}{' '}
            <i className='fas fa-quote-left' />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  video: state.videoApp.video,
  offSet: state.videoApp.offSet,
});

const mapDispatchToProps = {
  setOffset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
