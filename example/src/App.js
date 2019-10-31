import React, { Component } from "react";
import RePromise from "re-promise-component";
import axios from "axios";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Axios_sample, Promise_sample } from "./constants";

function delay(t, v) {
  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}
export default class App extends Component {
  render() {
    return (
      <div style={{ margin: 100 }}>
        <h1>re-promise-component </h1>
        React Promise resolver component, inspired from react apollo client.
        This will help to have result,loading,error states without initializing
        additional states or hooks
        <h2>installation</h2>
        <code>
          npm install re-promise-component
          <br /> yarn add re-promise-component
        </code>
        <h2>Use with Axios</h2>
        <h3>Code</h3>
        <SyntaxHighlighter language="javascript" style={docco}>
          {Axios_sample}
        </SyntaxHighlighter>
        {/* For making api calls  */}
        <h3>Result</h3>
        <code>
          <RePromise promise={axios.get} args={["/"]}>
            {(result, error, loading) => {
              if (loading) return "Loading..";
              else if (error) return "Oops something went wrong!!";
              else
                return <div>{JSON.stringify(result || "No data found")}</div>;
            }}
          </RePromise>
        </code>
        <br />
        <br />
        <br />
        <h2>Promise Sample</h2>
        <h3>Code</h3>
        <SyntaxHighlighter language="javascript" style={docco}>
          {Promise_sample}
        </SyntaxHighlighter>
        {/* Resolving promises */}
        <h3>Result</h3>
        <code>
          <RePromise promise={delay} args={[2000]}>
            {(result, error, loading) => {
              if (loading) return "Loading..";
              else if (error) return "Oops something went wrong!!";
              else
                return <div>{JSON.stringify(result || "No data found")}</div>;
            }}
          </RePromise>
        </code>
      </div>
    );
  }
}
