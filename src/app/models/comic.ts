import { Image } from "./image";

export class Comic {

    public id: number;
    public digitalId: number;
    public title: string;
    public issueNumber: number;
    public variantDescription: string;
    public description: string;
    public modified	: Date;
    public isbn: string;
    public upc: string;
    public diamondCode: string;
    public ean: string;
    public issn: string;
    public format: string;
    public pageCount: number;
    public textObjects: Array<any> = new Array<any>();
    public resourceURI: string;
    public urls: Array<any> = new Array<any>();
    public series: any;
    public variants: Array<any> = new Array<any>();
    public collections: Array<any> = new Array<any>();
    public collectedIssues: Array<any> = new Array<any>();
    public dates: Array<any> = new Array<any>();
    public prices: Array<any> = new Array<any>();
    public thumbnail: Image;
    public images: Array<Image> = new Array<Image>();
    public creators: any;
    public characters: any;
    public stories: any;
    public events: any;
}