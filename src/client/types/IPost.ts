export interface IPost {
	readonly id: string;
	readonly title: string;
	readonly thumbnail: string;
	readonly author: string;
	readonly favorite: boolean;
	handleFavoriteClick: (postId: string) => void;
}
