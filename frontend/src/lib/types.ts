export interface Tech {
	name: string;
	icon: Image;
}

export interface Image {
	url: string;
	[key: string]: any;
}
