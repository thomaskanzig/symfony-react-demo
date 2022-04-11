import React, { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
	children: ReactElement;
}

const Layout = (props: LayoutProps) => {
	return (
		<React.Fragment>
			<Header />
			<main className="flex-shrink-0">{props.children}</main>
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
