import * as React from "react";
import * as renderer from "react-test-renderer";

import Post from "./index";

import { IPost as IPostProps } from "@client/types/IPost";

test("renders content to the page", () => {
	const mockHandleFavoriteClick = (postId: string) => null;
	const props: IPostProps = {
		id: "1234",
		title: "This is a post test",
		thumbnail: "",
		author: "tester",
		favorite: true,
		handleFavoriteClick: mockHandleFavoriteClick,
	};

	const tree = renderer.create(<Post {...props} />).toJSON();
	expect(tree).toMatchSnapshot();
});
