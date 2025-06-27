import styled, { css } from "styled-components";
import Anchor from "../atomic/Anchor";
import { EmailLogo, GithubLogo, LinkedinLogo, PhoneLogo } from "../icons";
import { about, contact } from "@/app/constants";

const Title = styled.div``;

const ExternalLinks = styled.ul.attrs({ role: "list" })`
  display: flex;
`;

const linkIconStyles = css``;

const StyledMailIcon = styled(EmailLogo)`
  ${linkIconStyles};
`;

const StyledGithubIcon = styled(GithubLogo)`
  ${linkIconStyles};
`;

const StyledLinkedinIcon = styled(LinkedinLogo)`
  ${linkIconStyles};
`;

const StyledPhoneIcon = styled(PhoneLogo)`
  ${linkIconStyles};
`;

export default function TitleBar() {
  return (
    <Title>
      <h1>{about.name}</h1>
      <h2>{about.title}</h2>
      <ExternalLinks>
        <li>
          <Anchor href={`mailto:${contact.email}`} title="email">
            <StyledMailIcon />
            <p>{contact.email}</p>
          </Anchor>
        </li>
        <li>
          <Anchor href={contact.github} title="github">
            <StyledGithubIcon />
            <p>Github</p>
          </Anchor>
        </li>
        <li>
          <Anchor href={contact.linkedin} title="linkedin">
            <StyledLinkedinIcon />
            <p>Linkedin</p>
          </Anchor>
        </li>
        <li>
          <Anchor href={contact.phone} title="phone number">
            <StyledPhoneIcon />
            <p>{contact.phone}</p>
          </Anchor>
        </li>
      </ExternalLinks>
    </Title>
  );
}
