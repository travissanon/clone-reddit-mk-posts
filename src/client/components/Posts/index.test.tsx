import * as React from "react";
import * as renderer from "react-test-renderer";

import Posts from "./index";

import { IPosts as IPostsProps } from "@client/types/IPosts";
import { IPost } from "@client/types/IPost";

test("renders content to the page", () => {
	const mockHandleFavoriteClick = (postId: string) => null;
	const postData: IPost[] = [
		{
			id: "test1",
			title: "Test One",
			thumbnail: "",
			author: "tester1",
			favorite: false,
			handleFavoriteClick: mockHandleFavoriteClick,
		},
		{
			id: "test2",
			title: "Test One",
			thumbnail: "",
			author: "tester2",
			favorite: true,
			handleFavoriteClick: mockHandleFavoriteClick,
		},
	];

	const props: IPostsProps = {
		data: postData,
		favoritePosts: new Set(),
		handleFavoriteClick: mockHandleFavoriteClick,
	};

	const tree = renderer.create(<Posts {...props} />).toJSON();
	expect(tree).toMatchSnapshot();
});
