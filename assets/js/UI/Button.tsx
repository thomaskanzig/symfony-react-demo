import React from "react";
import classNames from "classnames";

interface IButton {
	label: string;
	isLoading?: boolean;
	isSubmitType?: boolean;
}

const Button = (props: IButton) => {
	return (
		<button
			className={classNames("btn btn-dark btn-lg btn-block", {
				"is-loading": props.isLoading,
			})}
			type={props.isSubmitType ? "submit" : "button"}
		>
			{props.isLoading ? "Loading..." : props.label}
		</button>
	);
};

export default Button;
