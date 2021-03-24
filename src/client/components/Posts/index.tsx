import React from "react";
import Post from "../Post/index";

import "./style.scss";

interface IPostsProps {
	readonly data: IPost[];
}

interface IPost {
	readonly id: string;
	readonly title: string;
	readonly thumbnail: string;
	readonly author: string;
}

const Posts: React.FC<IPostsProps> = ({ data }) => {
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
					/>
				))}
			</div>
		</div>
	);
};

export default Posts;
