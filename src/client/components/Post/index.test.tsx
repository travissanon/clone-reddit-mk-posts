import * as React from "react";
import * as renderer from "react-test-renderer";

import Post, { IPostProps } from "./index";

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
