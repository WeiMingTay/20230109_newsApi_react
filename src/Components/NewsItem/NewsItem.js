const NewsItem = (props) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  	return (
		<article>
			<div>
				<img src={props.image} />
			</div>
			<h3>{props.titel}</h3>
			<p>{props.text}</p>

			<date>{new Date(props.date).toLocaleDateString("DE-de", options)}</date>
			<a target="_blank" href={props.url}>
				Read More
			</a>
		</article>
	);
};

export default NewsItem;
