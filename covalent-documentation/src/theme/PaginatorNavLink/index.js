import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
export default function PaginatorNavLink(props) {
  const { permalink, title, subLabel, isNext } = props;
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(location.pathname);
  });
  return (
    <>
      {(path !== "/docs/" && path !== "/docs") && (
        <Link

          className={clsx(
            "pagination-nav__link",
            isNext ? "pagination-nav__link--next" : "pagination-nav__link--prev"
          )}
          to={permalink}
        >
          {subLabel && (
            <div className="pagination-nav__sublabel">{subLabel}</div>
          )}
          <div className="pagination-nav__label">{title}</div>
        </Link>
      )}
    </>
  );
}
