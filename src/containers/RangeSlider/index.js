import React from 'react';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import "./RangeSlider.css"
import { withRouter } from 'react-router-dom';
import * as qs from 'query-string';


class Rangeslider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 50, max: 500 },
    };
  }
  componentDidMount() {
    const value = this.state.value;
    const parsed = qs.parse(this.props.location.search);
    if (parsed.max && parsed.min) {
      value.max = parseInt(parsed.max);
      value.min = parseInt(parsed.min);
      this.setState({
        value
      })
    }
  }
  handleChange = (value) => {
    this.setState({ value })
    console.log(this.props)
    this.props.history.push(`/home?max=${value.max}&min=${value.min}`)
  }
  render() {
    console.log(this.state.value)
    return (
      <>
        <p className="price">Price</p>
        <InputRange
          maxValue={500}
          minValue={50}
          value={this.state.value}
          onChange={(value) => this.handleChange(value)} />
      </>

    );
  }
}
export default withRouter(Rangeslider)