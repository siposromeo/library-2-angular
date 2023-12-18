export interface BookModel {
    id: number;
    author: string;
    title: string;
    isbn: string;
    pubDate: Date;
    volumes: number;
    freeVolumes: number;  
}