import {Component,Input,Output,OnInit,ViewChild,EventEmitter,ChangeDetectionStrategy} from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform{
    transform(items: any, filter: any, isAnd: boolean):any {
         if (filter && Array.isArray(items)) {
            let filterKeys = Object.keys(filter);
            if (isAnd){
               return items.filter(item =>
                filterKeys.reduce((memo, keyName) =>
                (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
            }else{
                return items.filter(item => {
                    return filterKeys.some((keyName) => {
                    //console.log(keyName);
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === "";
                    });
                });
            }
        }else{
            return items;
        }
    }
}