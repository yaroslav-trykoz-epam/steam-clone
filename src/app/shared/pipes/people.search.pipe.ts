import { Pipe, PipeTransform } from "@angular/core";
import { People } from "../models/people.model";

@Pipe({
    name:'peopleSearch'
})

export class PeopleSearhPipe implements PipeTransform{
     
    transform(value: People[], query:string):People[] {
        return value.filter(el=> el.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    }
}