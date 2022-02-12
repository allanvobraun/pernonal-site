export interface Tech {
	name: string;
	icon: Image;
}

export interface Image {
	url: string;
}


export interface Link {
	name: string;
	ref: string;
}

export interface LinkWithIcon extends Link {
	icon: string;
	color: string;
}