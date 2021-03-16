import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";

import Icon from "../components/icon";
import YouTube from "../components/youtube";

const MDXPresenter: React.FunctionComponent<{
  data: string;
}> = ({ data }) => {
  // Replace paragraphs with divs so we can nest things like figcaption in them.
  const paragraphAsDiv = (
    props: React.HTMLAttributes<HTMLDivElement>
  ): React.ReactElement => {
    return <div className="mv3" {...props} />;
  };

  return (
    <MDXProvider
      components={{
        Icon,
        YouTube,
        p: paragraphAsDiv,
      }}
    >
      <MDXRenderer>{data}</MDXRenderer>
    </MDXProvider>
  );
};

export default MDXPresenter;
