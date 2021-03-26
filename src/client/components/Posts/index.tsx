import React from "react";
import Post from "@components/Post";

import "./style.scss";

export interface IPostsProps {
	readonly data: IPost[];
	readonly favoritePosts: Set<string>;
	handleFavoriteClick: (postId: string) => void;
}

export interface IPost {
	readonly id: string;
	readonly title: string;
	readonly thumbnail: string;
	readonly author: string;
}

const Posts: React.FC<IPostsProps> = ({
	data,
	favoritePosts,
	handleFavoriteClick,
}) => {
	const isFavoritePost = (id: string) => {
		return favoritePosts.has(id);
	};

	return (
		<div className="reddit-posts">
			<div className="reddit-posts__container">
				{data.map((post: any) => (
					<Post
						key={post.id}
						id={post.id}
						title={post.title}
						thumbnail={post.thumbnail}
						author={post.author}
						favorite={isFavoritePost(post.id)}
						handleFavoriteClick={handleFavoriteClick}
					/>
				))}
			</div>
		</div>
	);
};

export default Posts;
