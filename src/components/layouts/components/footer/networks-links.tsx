import React from "react";
import { Box, Flex, Link } from "theme-ui";
import SocialFacebook from "../../../illustrations/social-facebook";
import SocialGithub from "../../../illustrations/social-github";
import SocialLinkedin from "../../../illustrations/social-linkedin";

export const NetworksLinks: React.FC = (props) => (
  <Box {...props}>
    <Flex sx={{ justifyContent: ["flex-start", "flex-start", "flex-end"] }}>
      {[
        {
          href: "https://github.com/bjerkio",
          label: "Github Profile",
          icon: <SocialGithub width="100%" height="100%" />,
        },
        {
          href: "https://www.linkedin.com/company/bjerk/",
          label: "LinkedIn Profile",
          icon: <SocialLinkedin width="100%" height="100%" />,
        },
        {
          href: "https://www.facebook.com/WeAreDigitalization",
          label: "Facebook Profile",
          icon: <SocialFacebook width="100%" height="100%" />,
        },
      ].map(({ href, icon, label }, index) => (
        <Link
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          sx={{
            width: "1.7rem",
            maxWidth: "35px",
            mr: [2, 0, 0],
            ml: [0, 3, 3],
            cursor: "pointer",
          }}
        >
          {icon}
        </Link>
      ))}
    </Flex>
  </Box>
);
