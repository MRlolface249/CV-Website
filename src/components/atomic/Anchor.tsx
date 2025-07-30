"use client";

import React, { AnchorHTMLAttributes } from "react";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
}

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, external = false, ...props }, ref) => {
    const externalLinkProps = external
      ? {
          rel: "noreferrer",
          target: "_blank",
        }
      : null;

    return (
      <a ref={ref} {...externalLinkProps} {...props}>
        {children}
      </a>
    );
  }
);

export default Anchor;
