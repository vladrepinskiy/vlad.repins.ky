import { styled } from "goober";

export const SidebarLinks = () => {
  return (
    <SocialSection>
      <SocialLinks>
        <SocialLink
          href="https://github.com/vladrepinskiy"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </SocialLink>
        <SocialLink
          href="https://x.com/vladrepinsky"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/vladrepinsky/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </SocialLink>
        <SocialLink href="mailto:vladrepinsky@gmail.com">Email</SocialLink>
        <SocialLink href="https://cal.com/vladrepinsky">Book a call</SocialLink>
      </SocialLinks>
    </SocialSection>
  );
};

const SocialSection = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SocialLinks = styled("div")`
  display: flex;
  flex-direction: column;
`;

const SocialLink = styled("a")`
  font-family: var(--font-inconsolata);
  font-size: ${(props) => props.theme.fontSizes.md};
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.palette.textMuted};
  padding: 0.1rem 0;
  text-decoration: none;
  transform: translateX(0);
  transition:
    transform 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateX(10px);
    color: ${(props) => props.theme.palette.text};
  }
`;
