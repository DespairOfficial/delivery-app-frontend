

export class Restaurant {
    /**
     * Restaurant's unique id
     */

    readonly id: number;

    /**
     * Title of restaurant
     */

    readonly name: string;

    /**
     * Short description of restaurant
     */

    readonly description: string;
	/**
     * Logo, image of restaurant
     */

    readonly image: string;
	/**
     * Latitude of restaurant's address
     */

    readonly lat: string;
	/**
     * Longitude of restaurant's address
     */

    readonly long: string;
	/**
     * Restaurant's address
     */

    readonly address: string;
	/**
     * Rating
     */

    readonly rating: number;
	/**
     * Category id
     */

    readonly category_name: string;

}
