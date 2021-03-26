import React, { useState, useEffect, SetStateAction } from "react";
import getRedditPosts from "@api/getRedditPosts";
import Posts from "@components/Posts";
// import { IPost } from "./types/IPost";

export interface IPost {
	readonly id: string;
	readonly title: string;
	readonly thumbnail: string;
	readonly author: string;
}

const App: React.FC = () => {
	const [redditPosts, setRedditPosts] = useState<Array<IPost>>([]);
	const [favoritePosts, setFavoritePosts] = useState<Set<string>>(new Set());

	useEffect(() => {
		getRedditPosts().then((data) => setRedditPosts(data));
	}, []);

	const sortPosts = (): void => {
		setRedditPosts((prevState): IPost[] => {
			const newState: IPost[] = [...prevState];
			newState.sort((a: IPost, b: IPost): number => {
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

	const toggleFavoritePost = (postId: string): void => {
		setFavoritePosts(
			(prevState: Set<string>): Set<string> => {
				// spread operator is not working for Sets in Typescript for some reason.
				const newState: Set<string> = new Set(Array.from(prevState));

				if (newState.has(postId)) {
					newState.delete(postId);
				} else {
					newState.add(postId);
				}

				return newState;
			}
		);
	};

	return (
		<div className="reddit-posts">
			<button
				className="reddit-posts__filters"
				onClick={(): void => sortPosts()}
			>
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
