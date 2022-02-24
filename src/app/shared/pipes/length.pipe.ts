import { Pipe, PipeTransform } from "@angular/core";
import { People } from "../models/people.model";

@Pipe({
    name:'length'
})

export class LengthPipe implements PipeTransform{
     
    transform(value: People[]):number {
        return value.length;
    }
}