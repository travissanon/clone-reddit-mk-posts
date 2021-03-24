import React, { useState, useEffect } from "react";
import getRedditPosts from "./api/getRedditPosts";
import Posts from "./client/components/Posts/index";
import Post from "./client/components/Post/index";
// import { IPost } from "./types/IPost";

export interface IPost {
	readonly id: string;
	readonly title: string;
	readonly thumbnail: string;
	readonly author: string;
}

const App: React.FC = () => {
	const [redditPosts, setRedditPosts] = useState<Array<IPost>>([]);

	useEffect(() => {
		getRedditPosts().then((data) => setRedditPosts(data));
	}, []);

	const sortPosts = () => {
		setRedditPosts((prevState) => {
			const newState = [...prevState];
			newState.sort((a: any, b: any) => {
				if (a.title < b.title) {
					return -1;
				} else if (a.title > b.title) {
					return 1;
				} else {
					return 0;
				}
			});

			return newState;
		});
	};

	return (
		<div className="reddit-posts">
			<div className="reddit-posts__filters" onClick={() => sortPosts()}>
				Sort Posts
			</div>
			<Posts data={redditPosts} />
		</div>
	);
};

export default App;
