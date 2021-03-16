import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

import Heart from "../assets/icons/heart.svg";
import Icon from "./icon";

// Static GraphQL query
const rightBarStaticQuery = graphql`
  fragment RightBarPosts on MdxConnection {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }

  query rightBarStaticQuery {
    pages: allMdx(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { fields: { sourceInstanceName: { eq: "pages" } } }
    ) {
      ...RightBarPosts
    }
  }
`;

// TypeScript-typed fields corresponding to automatic (exported) GraphQL query
interface PostList {
  edges: {
    node: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    };
  }[];
}

interface HeaderData {
  pages: PostList;
}

const RightBar: React.FunctionComponent = () => {
  const data: HeaderData = useStaticQuery(rightBarStaticQuery);

  const footerSectionClassName = "f6 pt1";

  const linkDefaultClassName = "link dim black-80";

  return (
    <div className="f5 lh-copy center">
      {/*** Pinned and all posts ***/}
      <h4>Pinned</h4>
      {data.pages.edges.map(({ node }) => (
        <div key={node.fields.slug}>
          <Link className={linkDefaultClassName} to={node.fields.slug}>
            {node.frontmatter.title}
          </Link>
        </div>
      ))}
      <div>
        <Link className={linkDefaultClassName} to="/posts/all">
          All posts
        </Link>
      </div>

      {/*** Footer-type items ***/}
      <h4>Credits</h4>

      <div className={footerSectionClassName}>
        ©{new Date().getFullYear()}
        {` `}
        <a
          className={linkDefaultClassName}
          href="http://creativecommons.org/licenses/by-sa/4.0/"
          rel="license"
        >
          CC-BY-SA-4.0
        </a>
      </div>

      <div className={footerSectionClassName}>
        Made with <Icon className="v-mid w1 h1" sprite={Heart} /> in Seattle.
      </div>
    </div>
  );
};

export default RightBar;
