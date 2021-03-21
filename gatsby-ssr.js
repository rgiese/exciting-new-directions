import React from "react";

function getAnalyticsCode() {
  return (
    <React.Fragment key="simpleanalytics">
      <script
        async
        defer
        src="https://sa.excitingnewdirections.com/latest.js"
      />
      <noscript>
        <img src="https://sa.excitingnewdirections.com/noscript.gif" alt="" />
      </noscript>
    </React.Fragment>
  );
}

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([getAnalyticsCode()]);
};
