# re-promise-component

> React Promise resolver component, inspired from react apollo client. This will help to have result,loading,error states without initializing additional states or hooks

[![NPM](https://img.shields.io/npm/v/re-promise-component.svg)](https://www.npmjs.com/package/re-promise-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save re-promise-component
```

## Usage

```jsx
import React, { Component } from "react";
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
}
```

## License

MIT © [soorajshankar](https://github.com/soorajshankar)
