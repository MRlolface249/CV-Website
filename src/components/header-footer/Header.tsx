"use client";

import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import TitleBar from "./TitleBar";

const StyledHeader = styled.header``;
const HeaderContent = styled.div``;

interface HeaderProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Header({ children, ...props }: HeaderProps) {
	return ( <StyledHeader {...props}>
        <HeaderContent>
            <TitleBar />
            {children}
        </HeaderContent>
    </StyledHeader>
);
}
