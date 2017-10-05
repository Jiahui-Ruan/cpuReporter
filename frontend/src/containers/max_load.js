import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeMaxLoad } from '../actions/index';

class MaxLoad extends Component {
  constructor(props) {
    super(props);

    this.state = { maxLoad: 100 }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.changeMaxLoad(this.state.maxLoad / 100);
  }

  onInputChange(event) {
    this.setState( { maxLoad: event.target.value } );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            className="form-contorl"
            value={this.state.maxLoad}
            onChange={this.onInputChange}
            type="number"
            required
          />
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeMaxLoad }, dispatch);
}

export default connect(null, mapDispatchToProps)(MaxLoad);
