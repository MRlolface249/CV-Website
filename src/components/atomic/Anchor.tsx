"use client";

import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import styled from "styled-components";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    external?: boolean;
}

export default function Anchor({
	children,
	external = false,
	...props
}: AnchorProps) {
	const externalLinkProps =
		external ?
			{
				rel: "noreferrer",
				target: "_blank",
			}
		:	null;
	return (
		<a {...externalLinkProps} {...props}>
			{children}
		</a>
	);
}