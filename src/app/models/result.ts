import { ResultData } from "./resultData";

export class Result {
    public code: number;
    public status: string;
    public etag: string;
    public copyright: string;
    public attributionText: string;
    public attributionHTML: string;
    public data: ResultData = new ResultData();
}