export const Promise_sample = `import React, { Component } from "react";
import RePromise from "re-promise-component";
import axios from "axios";

function delay(t, v) {
  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}
export default class App extends Component {
  render() {
    return (
      <div>
        {/* Resolving promises */}
        <RePromise promise={delay} args={[2000]}>
          {(result, error, loading) => {
            if (loading) return "Loading..";
            else if (error) return "Oops something went wrong!!";
            else return <div>{JSON.stringify(result || "No data found")}</div>;
          }}
        </RePromise>
      </div>
    );
  }
}`;

export const Axios_sample = `import React, { Component } from "react";
import RePromise from "re-promise-component";
import axios from "axios";

function delay(t, v) {
  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}
export default class App extends Component {
  render() {
    return (
      <div>
        {/* For making api calls  */}
        <RePromise promise={axios.get} args={["/"]}>
          {(result, error, loading) => {
            if (loading) return "Loading..";
            else if (error) return "Oops something went wrong!!";
            else return <div>{JSON.stringify(result || "No data found")}</div>;
          }}
        </RePromise>
      </div>
    );
  }
}`;
