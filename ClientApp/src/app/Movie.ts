//So what is a typescript interface vs classes?
//A class declare methods and properties, fills the same role as a C#
//A ts interface operates differently than a C#, one
//a ts interface exist purely to contain properties, and all of those properties
//have the option of being uninitialized
//Not every API's json data will return consistently in the same format

//In a js/ts class,
export interface Movie{
    id : number;
    title : string;
    genre : string;
    runtime : number;
    year : number;
}

export class Convert {
    public static toMovie(json: string): Movie {
        return JSON.parse(json);
    }

    public static MovieToJson(value: Movie): string {
        return JSON.stringify(value);
    }
}