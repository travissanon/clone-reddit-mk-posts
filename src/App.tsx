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

	return (
		<div className="reddit-posts">
			<Posts data={redditPosts} />
		</div>
	);
};

export default App;
