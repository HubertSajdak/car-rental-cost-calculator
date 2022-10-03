import React from "react";
import { BasePageLayoutWrapper } from "./BasePageLayout.styled";
export interface BasePageLayoutProps {
	children: React.ReactNode;
}
const BasePageLayout = ({ children }: BasePageLayoutProps) => {
	return <BasePageLayoutWrapper>{children}</BasePageLayoutWrapper>;
};

export default BasePageLayout;
