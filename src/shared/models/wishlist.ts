export class wishList{
    constructor(public wishtext:string  , public isComplete : boolean=false){
        //get the wishtext from the import file and the isComplete
        //in the event the isComplete is not Provided it will take the default value of false
    }
}