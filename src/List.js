import { useState, useEffect } from "react";
import firebaseApp from "./config/firebase";
import Article from "./Article";
import "firebase/firestore";
const db = firebaseApp.firestore();

const List = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);

	// useEffect(() => {
	// 	setLoading(true);
	// }, [articles]);

	const getArticles = async () => {
		await db
			.collection("Articles")
			.get()
			.then((snapshot) => {
				// console.log(snapshot);
				if (!snapshot.empty) {
					let allArticles = [];
					snapshot.forEach((doc) => {
						const article = {
							id: doc.id,
							...doc.data(),
						};
						allArticles.push(article);
					});
					setArticles(allArticles);
				}
			})
			.finally(() => setLoading(true));
	};

	return (
		<>
			{/* {loading
				? articles.map((article, index) => {
						return <Article data={article} key={index} />;
				  })
				: ""} */}
			{loading ? <Article data={articles[0]} key={0} /> : ""}
			<button onClick={getArticles}>getArticles!!!</button>
		</>
	);
};

export default List;
