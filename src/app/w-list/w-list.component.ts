import { Component,Input } from '@angular/core';
import { wishList } from 'src/shared/models/wishlist';

@Component({
  selector: 'w-list',
  templateUrl: './w-list.component.html',
  styleUrls: ['./w-list.component.css']
})
export class WListComponent {
  @Input() visibleitem : wishList[] = [];
  WListComponent(){
    console.log(this.visibleitem);
  }
  targetItem(item : wishList){
    item.isComplete = !item.isComplete;
  }
}
