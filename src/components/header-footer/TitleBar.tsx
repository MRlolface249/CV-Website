import styled, { css } from "styled-components";
import Anchor from "../atomic/Anchor";
import { EmailLogo, GithubLogo, LinkedinLogo, PhoneLogo } from "../icons";
import { about, contact } from "@/app/constants";
import { Github, Linkedin, Mail, PhoneCall } from "lucide-react";
import LinkIconContainer from "../atomic/LinkIcon";

const Title = styled.div`
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  background-color: #313c4e;
  color: white;
  border-radius: 2rem;
  gap: 2rem;
`;

const StyledName = styled.div`
  font-size: 12rem;
` 
const StyledTitle = styled.div`
  font-size: 6rem;
  color: #54bcc4;
`

const ExternalLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
`;

const StyledLink = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: start;
  flex-direction: row;
  
`;

const StyledAnchor = styled(Anchor)`
  color: inherit;
  text-decoration: none;
  font-size: 4rem;
`;

export default function TitleBar() {
  return (
    <Title>
      <StyledName>{about.name}</StyledName>
      <StyledTitle>{about.title}</StyledTitle>
      <ExternalLinks>
        <StyledLink>
          <LinkIconContainer icon={<Mail size={64} strokeWidth={2}/>}/>
          <StyledAnchor href={`mailto:${contact.email}`} title="email">
            {contact.email}
          </StyledAnchor>
        </StyledLink>
        <StyledLink>
          <LinkIconContainer icon={<Github size={64} strokeWidth={2}/>}/>
          <StyledAnchor href={contact.github} title="github">
            Github
          </StyledAnchor>
        </StyledLink>
        <StyledLink>
          <LinkIconContainer icon={<Linkedin size={64} strokeWidth={2}/>}/>
          <StyledAnchor href={contact.linkedIn} title="linkedin">
            {contact.linkedIn}
          </StyledAnchor>
        </StyledLink>
        <StyledLink>
          <LinkIconContainer icon={<PhoneCall size={64} strokeWidth={2}/>}/>
          <StyledAnchor href={contact.phone} title="phone number">
            {contact.phone}
          </StyledAnchor>
        </StyledLink>
      </ExternalLinks>
    </Title>
  );
}
