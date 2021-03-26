import React from "react";
import SVGFavorite from "@images/star.svg";
import SVGFavoriteFilled from "@images/star--filled.svg";

import "./style.scss";

export interface IPostProps {
	readonly id: string;
	readonly title: string;
	readonly thumbnail: string;
	readonly author: string;
	readonly favorite: boolean;
	handleFavoriteClick: (postId: string) => void;
}

const Post: React.FC<IPostProps> = ({
	id,
	title,
	thumbnail,
	author,
	favorite,
	handleFavoriteClick,
}) => {
	return (
		<div className="reddit-post" data-id={id}>
			<div className="reddit-post__thumbnail">
				<img src={thumbnail} alt="post thumbnail" />
			</div>
			<div className="reddit-post__content">
				<div className="reddit-post__title">
					<h3>{title}</h3>
				</div>
				<div className="reddit-post__author">{author}</div>
			</div>
			<div
				className="reddit-post__favorite"
				onClick={() => handleFavoriteClick(id)}
			>
				{favorite ? (
					<img src={SVGFavoriteFilled} alt="favorited post" />
				) : (
					<img src={SVGFavorite} alt="favorite post" />
				)}
			</div>
		</div>
	);
};

export default Post;
