import styled, { css } from "styled-components";
import Anchor from "../atomic/Anchor";
import { EmailLogo, GithubLogo, LinkedinLogo, PhoneLogo } from "../icons";
import { about, contact } from "@/app/constants";
import { Github, Linkedin, Mail, PhoneCall } from "lucide-react";

const Title = styled.div`
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  background-color: #313c4e;
  color: white;
  border-radius: 3rem;
`;

const ExternalLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 5rem;
`;

const StyledLink = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
`;

const StyledAnchor = styled(Anchor)`
  color: inherit;
  text-decoration: none;
`;

const linkIconStyles = css``;

const StyledMailIcon = styled(Mail)`
  ${linkIconStyles};
`;

const StyledGithubIcon = styled(Github)`
  ${linkIconStyles};
`;

const StyledLinkedinIcon = styled(Linkedin)`
  ${linkIconStyles};
`;

const StyledPhoneIcon = styled(PhoneCall)`
  ${linkIconStyles};
`;

export default function TitleBar() {
  return (
    <Title>
      <h1>{about.name}</h1>
      <h2>{about.title}</h2>
      <ExternalLinks>
        <StyledLink>
          <StyledMailIcon size={64} strokeWidth={2} />
          <StyledAnchor href={`mailto:${contact.email}`} title="email">
            <p>{contact.email}</p>
          </StyledAnchor>
        </StyledLink>
        <StyledLink>
          <StyledGithubIcon size={64} strokeWidth={2} />
          <StyledAnchor href={contact.github} title="github">
            <p>Github</p>
          </StyledAnchor>
        </StyledLink>
        <StyledLink>
          <StyledLinkedinIcon size={64} strokeWidth={2} />
          <StyledAnchor href={contact.linkedin} title="linkedin">
            <p>Linkedin</p>
          </StyledAnchor>
        </StyledLink>
        <StyledLink>
          <StyledPhoneIcon size={64} strokeWidth={2} />
          <StyledAnchor href={contact.phone} title="phone number">
            <p>{contact.phone}</p>
          </StyledAnchor>
        </StyledLink>
      </ExternalLinks>
    </Title>
  );
}
