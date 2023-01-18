export interface IImagesUrls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

export interface IImagesLinksLinks {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

export interface FoodDrink {
    status: string;
}

export interface ArchitectureInterior {
    status: string;
}

export interface TexturesPatterns {
    status: string;
}

export interface Wallpapers {
    status: string;
}

export interface ArtsCulture {
    status: string;
}


export interface Links2 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}

export interface ProfileImage {
    small: string;
    medium: string;
    large: string;
}

export interface Social {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
}

export interface User {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: Links2;
    profile_image: ProfileImage;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social;
}

export interface Exif {
    make: string;
    model: string;
    name: string;
    exposure_time: string;
    aperture: string;
    focal_length: string;
    iso: number;
}

export interface Position {
    latitude?: number;
    longitude?: number;
}

export interface Location {
    name: string;
    city: string;
    country: string;
    position: Position;
}

export interface IServerResponse {
    id: string;
    created_at: Date;
    updated_at: Date;
    promoted_at: Date;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    urls: IImagesUrls;
    links: IImagesLinksLinks ;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship?: any;
    user: User;
    exif: Exif;
    location: Location;
    views: number;
    downloads: number;
}

