import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl:'./app-star-component.html',
    styleUrls:['./star-component.css']
}) 

export class StarComponent implements OnChanges{
    @Input()
    avalia:number=0;
    widthStar!:number;
    
    
    ngOnChanges(): void {
        this.widthStar = this.avalia * 74 /5;
    }
}