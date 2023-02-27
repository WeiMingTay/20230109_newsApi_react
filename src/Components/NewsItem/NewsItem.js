/* import Collapsible from "react-collapsible"; */

const NewsItem = (props) => {
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return (
		<article>
			{<div>{<img src={props.image} alt=""/>}</div>}
			{/* <Collapsible trigger={<h3>{props.titel}</h3>}>
				<p>{props.content}</p>
			</Collapsible> */}
				<h3>{props.titel}</h3>
			{<p>{props.text}</p>}

			<p className="date">{new Date(props.date).toLocaleDateString("DE-de", options)}</p >
			<a target="_blank" rel="noreferrer" href={props.url}>
				Read More
			</a>
		</article>
	);
};

export default NewsItem;
