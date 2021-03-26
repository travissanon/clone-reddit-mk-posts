import { IPost } from "./IPost";

export interface IPosts {
	readonly data: IPost[];
	readonly favoritePosts: Set<string>;
	handleFavoriteClick: (postId: string) => void;
}
