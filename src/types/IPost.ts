export default interface IPost {
	readonly id: string;
	readonly created_utc: number;
	readonly title: string;
	readonly thumbnail: string;
	readonly author: string;
}
