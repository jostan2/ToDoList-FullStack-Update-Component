export interface ToDo {
    //need to make this mirror the JSON properites of the C# API
    //all the properties of the table should also be lowercase

    //no import, just type it the same:

    id: number;
    description:string;
    isCompleted?:boolean;

}
