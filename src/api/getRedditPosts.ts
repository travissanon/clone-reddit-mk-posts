const REDDIT_API_POSTS_URL =
	"https://www.reddit.com/r/mechanicalkeyboards.json";
const REDDIT_AUTHOR_AUTO_MODERATOR = "AutoModerator";
const REDDIT_MOD = "nickheller";

const getRedditPosts = (): Promise<any> => {
	return fetch(REDDIT_API_POSTS_URL)
		.then((res) => res.json())
		.then((data) =>
			data.data.children
				.filter(
					(child: Record<string, any>) =>
						child.data.author !== REDDIT_AUTHOR_AUTO_MODERATOR &&
						child.data.author !== REDDIT_MOD
				)
				.map((child: Record<string, any>) => {
					return (({ id, thumbnail, title, author }) => ({
						id,
						thumbnail,
						title,
						author,
					}))(child.data);
				})
		)
		.catch((err: Error) => {
			throw err;
		});
};

export default getRedditPosts;
