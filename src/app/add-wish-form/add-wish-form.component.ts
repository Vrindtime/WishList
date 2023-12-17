import { Component,Output,EventEmitter } from '@angular/core';
import { wishList } from 'src/shared/models/wishlist';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<string>();

  newWishText ='';

  addNewWish(){
    if(this.newWishText != ''){
      console.log("addNewWish:"+this.newWishText);
      this.addWish.emit(this.newWishText);
      this.newWishText =''; //to clear the text field
    }
  }
  
}
