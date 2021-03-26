import React from "react";
import Post from "@components/Post";

import { IPost } from "@client/types/IPost";
import { IPosts as IPostsProps } from "@client/types/IPosts";

import "./style.scss";

const Posts: React.FC<IPostsProps> = ({
	data,
	favoritePosts,
	handleFavoriteClick,
}) => {
	const isFavoritePost = (id: string): boolean => {
		return favoritePosts.has(id);
	};

	return (
		<div className="reddit-posts">
			<div className="reddit-posts__container">
				{data.map(
					(post: IPost): React.ReactElement => (
						<Post
							key={post.id}
							id={post.id}
							title={post.title}
							thumbnail={post.thumbnail}
							author={post.author}
							favorite={isFavoritePost(post.id)}
							handleFavoriteClick={handleFavoriteClick}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Posts;
