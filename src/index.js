import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

export default class RePromise extends Component {
  state = {
    result: null,
    error: null,
    loading: true
  };
  static propTypes = {
    promise: PropTypes.func
  };
  componentDidMount() {
    const { promise, args } = this.props;
    promise(...args)
      .then(result => {
        console.log({ result });
        this.setState({ result, error: null, loading: false });
      })
      .catch(error => {
        this.setState({ result: null, error, loading: false });
      });
  }

  render() {
    const { result, error, loading } = this.state;

    return this.props.children(result, error, loading);
  }
}
