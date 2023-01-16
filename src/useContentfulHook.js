import { useState, useEffect } from "react";

function useContentfulHook(query) {
	const [data, setData] = useState(null);

	useEffect(() => {
		window
			.fetch(
				//read only public key:
				`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_YOUR_SPACE_ID}/`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						//read only public key:
						Authorization: `Bearer ${process.env.REACT_APP_YOUR_ACCESS_TOKEN}`,
					},
					body: JSON.stringify({ query }),
				}
			)
			.then((response) => response.json())
			.then((json) => {
				setData(json.data);
			});
	}, [query]);
	return { data };
}

export default useContentfulHook;
