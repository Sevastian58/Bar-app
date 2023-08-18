import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Input()
  public placeholder:string=''

  @Output()
  public onValue:EventEmitter<string> = new EventEmitter();

  emitValue(term:string):void {
      this.onValue.emit(term);

  }
}
