import * as React from "react";
import * as renderer from "react-test-renderer";

import Posts, { IPostsProps, IPost } from "./index";

test("renders content to the page", () => {
	const postData: IPost[] = [
		{
			id: "test1",
			title: "Test One",
			thumbnail: "",
			author: "tester1",
		},
		{
			id: "test2",
			title: "Test One",
			thumbnail: "",
			author: "tester2",
		},
	];

	const props: IPostsProps = {
		data: postData,
		favoritePosts: new Set(),
		handleFavoriteClick: (postId: string) => {
			null;
		},
	};

	const tree = renderer.create(<Posts {...props} />).toJSON();
	expect(tree).toMatchSnapshot();
});
