import { useEffect, useState } from "react";
import NewsItem from "../NewsItem/NewsItem";

import "./NewsItem.css";

const News = () => {
	const API_KEY = "61a51e6230e145a2b1bda71a11df1048";
	let url = `https://newsapi.org/v2/everything?q=hamburg&from=2023-01-01&sortBy=publishedAt&apiKey=${API_KEY}`;

	let [news, setNews] = useState([]);
	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setNews(data.articles);
			});
	}, []);
	return (
		<section className="news">
			{news.map((element, index) => {
				return (
					<NewsItem
						key={index}
						image={element.urlToImage}
						titel={element.title}
						text={element.description}
						date={element.publishedAt}
						url={element.url}
					/>
				);
			})}
		</section>
	);
};

export default News;
