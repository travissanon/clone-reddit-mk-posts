import * as React from "react";
import * as renderer from "react-test-renderer";

import Post from "./index";

interface IPostProps {
	readonly id: string;
	readonly title: string;
	readonly thumbnail: string;
	readonly author: string;
	readonly favorite: boolean;
	handleFavoriteClick: (postId: string) => void;
}

test("renders content to the page", () => {
	const props: IPostProps = {
		id: "1234",
		title: "This is a post test",
		thumbnail: "",
		author: "tester",
		favorite: true,
		handleFavoriteClick: (postId: string) => {
			null;
		},
	};

	const tree = renderer.create(<Post {...props} />).toJSON();
	expect(tree).toMatchSnapshot();
});
