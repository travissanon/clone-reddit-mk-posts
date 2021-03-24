import React from "react";

import "./style.scss";

interface IPostProps {
	readonly id: string;
	readonly title: string;
	readonly thumbnail: string;
	readonly author: string;
}

const Post: React.FC<IPostProps> = ({ id, title, thumbnail, author }) => {
	return (
		<div className="reddit-post" data-id={id}>
			<div className="reddit-post__thumbnail">
				<img src={thumbnail} alt="post thumbnail" />
			</div>
			<div className="reddit-post__stuff">
				<div className="reddit-post__title">
					<h3>{title}</h3>
				</div>
				<div className="reddit-post__author">{author}</div>
			</div>
		</div>
	);
};

export default Post;
