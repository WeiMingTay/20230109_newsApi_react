import { useEffect, useState } from "react";
import NewsItem from "../NewsItem/NewsItem";

import "./NewsItem.css";

const News = () => {
	/* 	let [sprache, setSprache] = useState("de");
	useEffect(
		() => {
			// Sprachauswahl
			let sprachContainer = document.getElementById("sprache");

			let deutsch = document.getElementById("de");
			let deLabel = document.getElementById("deLabel");
			let englisch = document.getElementById("en");
			let enLabel = document.getElementById("enLabel");

			function sprachWahl() {
				if (deutsch.checked) {
					setSprache("de");
					enLabel.classList.remove("spracheChecked");
					deLabel.classList.remove("spracheUnchecked");
					enLabel.classList.add("spracheUnchecked");
					deLabel.classList.add("spracheChecked");
				} else if (englisch.checked) {
					setSprache("en");
					enLabel.classList.remove("spracheUnchecked");
					deLabel.classList.remove("spracheChecked");
					enLabel.classList.add("spracheChecked");
					deLabel.classList.add("spracheUnchecked");
				}
			};
			console.log(sprache);
		},
		{ sprache }
	); */
	// Input
	let [input, setInput] = useState("Klimawandel");
	console.log(input);
	function ChangeInput(e) {
		e.preventDefault();
		setInput(e.target.value);
	}
	/* useEffect(ChangeInput, [input]); */

	//fetch
	const API_KEY = "61a51e6230e145a2b1bda71a11df1048";
	let url = `https://newsapi.org/v2/everything?q=${input}&from=2023-01-01&sortBy=publishedAt&apiKey=${API_KEY}`;

	let [news, setNews] = useState([]);
	console.log(url);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setNews(data.articles);
			});
	}, [input]);
	return (
		<section className="news">
			<article className="newsHeader">
				<form onSubmit={ChangeInput}>
					<div>
						<input type="text" onChange={(e) => setInput(e.target.value)} />
						{<button>Klick</button>}
					</div>
					{/* 				<div id="sprache">
						<label for="de" className="spracheChecked" id="deLabel">
							🇩🇪
						</label>
						<input
							checked
							type="radio"
							name="sprache"
							id="de"
							onChange={sprachWahl}
						/>
						<label for="en" className="spracheUnchecked" id="enLabel">
							🇬🇧
						</label>
						<input type="radio" name="sprache" id="en" onChange={sprachWahl} />
					</div> */}
				</form>
			</article>
			<section>
				{news.map((element, index) => {
					return (
						<NewsItem
							key={index}
							image={element.urlToImage}
							titel={element.title}
							text={element.description}
							content={element.content}
							date={element.publishedAt}
							url={element.url}
						/>
					);
				})}
			</section>
		</section>
	);
};

export default News;
