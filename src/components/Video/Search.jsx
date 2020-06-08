import React from 'react';
import { connect } from 'react-redux';
import { searchVideo } from '../../store/actions';

class Search extends React.Component {
  state = { txt: '' };

  onChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value }, () =>
      this.props.searchVideo(this.state.txt)
    );
  };

  onSumbit = (e) => {
    e.preventDefault();
    this.props.searchVideo(this.state.txt);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSumbit} style={{ width: '100%' }}>
          <input
            type='text'
            name='txt'
            placeholder='Search Song...'
            value={this.state.txt}
            onChange={this.onChange}
          />
        </form>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  searchVideo,
};

export default connect(null, mapDispatchToProps)(Search);
