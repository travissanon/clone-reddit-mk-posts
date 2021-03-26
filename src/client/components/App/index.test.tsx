import * as React from "react";
import * as renderer from "react-test-renderer";

import App from "./index";

test("renders content to the page", () => {
	const tree = renderer.create(<App />).toJSON();
	expect(tree).toMatchSnapshot();
});
