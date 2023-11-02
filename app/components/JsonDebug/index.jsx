import React from "react";

const JsonDebug = ({ json }) => {
  return (
    <div className="my-4">
      <pre className="rounded p-4 bg-slate-100 font-mono">
        {JSON.stringify(json, null, 2)}
      </pre>
    </div>
  );
};

export default JsonDebug;
