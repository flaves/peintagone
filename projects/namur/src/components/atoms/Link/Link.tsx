import React, { forwardRef } from 'react';
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';

const LinkComponent = (
  { to, target, children, ...rest }: GatsbyLinkProps<Record<string, unknown>>,
  ref: React.LegacyRef<HTMLAnchorElement>,
): JSX.Element => {
  // If no url
  if (!to) return <div />;

  // If external
  if (to.indexOf('http') !== -1) {
    return (
      <a
        ref={ref}
        href={to}
        target={target}
        rel="noreferrer noopener"
        {...rest}
      >
        {children}
      </a>
    );
  }

  // If internal
  return (
    // @ts-ignore
    <GatsbyLink ref={ref} to={to} target={target} {...rest}>
      {children}
    </GatsbyLink>
  );
};

const Link = forwardRef(LinkComponent);

export default Link;
