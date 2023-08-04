import React from "react";
import FooterLinks from "@theme/Footer/Links";
import FooterLogo from "@theme/Footer/Logo";
import FooterCopyright from "@theme/Footer/Copyright";
import FooterLayout from "@theme/Footer/Layout";

function Footer() {
  const copyright = `@2023 Copyright Agnostiq | Created and shared with ♡ by <a href="https://agnostiq.ai/" target="_blank" rel="license noopener noreferrer">agnostiq.ai</a>`;
  const style = "light";
  const links = [];
  const logo = "";
  const logoa = {
    src: "/img/assets/git_dark.svg",
  };
  return (
    <FooterLayout
      style={style}
      links={links && links.length > 0 && <FooterLinks links={links} />}
      logo={logo && <FooterLogo logo={logo} />}
      copyright={copyright && <FooterCopyright copyright={copyright} />}
      logoa={<FooterLogo logo={logoa} />}
    />
  );
}
export default React.memo(Footer);
