import ReactLoading from "react-loading";

const LoadingAnimation = (props) => {
	const { color, width = 80 } = props;
	return (
		<ReactLoading
			type={"bubbles"}
			color={color}
			height={0}
			width={width}
		/>
	);
};

export default LoadingAnimation;
