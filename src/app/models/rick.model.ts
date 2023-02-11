export class RickAndMorty {
    id?: number;
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    origin?: ROrigin;
    location?: RLocation;
    episode?: string[];
    image?: string;
    url?: string;
    comment?: string;
    score?: number;
    // "created": "2017-11-04T18:48:46.250Z",
}

class ROrigin {
    name?: string;
    url?: string;
}

class RLocation {
    name?: string;
    url?: string;
}


