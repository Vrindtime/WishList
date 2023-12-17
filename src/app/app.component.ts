import { Component } from '@angular/core';
import { wishList } from 'src/shared/models/wishlist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'WishList';
  f: string = '1'; //filter
  itemFilter: String = '1';
  items: wishList[] = [
    new wishList("This is not completed"),
    new wishList("This is completed", true),
    new wishList("Why not , manually fasle", false),
  ]


  receivemessage(value: any) {
    this.items.push(new wishList(value));
    console.log("receivemessage"+value);
  }

  filter__value(value:any){
    this.f = value;
    console.log("f value=:"+this.f);
  }


  visibleitem(): wishList[] {
    if (this.f === '1') {
      return this.items;
    } else if (this.f === '2') {
      return this.items.filter(item => !item.isComplete);
    } else {
      return this.items.filter(item => item.isComplete);
    }
  }

}
