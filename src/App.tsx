import React, { useState, useEffect } from "react";
import getRedditPosts from "./api/getRedditPosts";
import Posts from "./client/components/Posts/index";
// import { IPost } from "./types/IPost";

export interface IPost {
	readonly id: string;
	readonly title: string;
	readonly thumbnail: string;
	readonly author: string;
}

const App: React.FC = () => {
	const [redditPosts, setRedditPosts] = useState<Array<IPost>>([]);
	const [favoritePosts, setFavoritePosts] = useState<any>(new Set());

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

	const toggleFavoritePost = (postId: string) => {
		setFavoritePosts((prevState: any) => {
			// spread operator is not working for Sets in Typescript for some reason.
			const newState = new Set(Array.from(prevState));

			if (newState.has(postId)) {
				newState.delete(postId);
			} else {
				newState.add(postId);
			}

			return newState;
		});
	};

	return (
		<div className="reddit-posts">
			<button className="reddit-posts__filters" onClick={() => sortPosts()}>
				Sort Posts
			</button>
			<Posts
				data={redditPosts}
				favoritePosts={favoritePosts}
				handleFavoriteClick={toggleFavoritePost}
			/>
		</div>
	);
};

export default App;
