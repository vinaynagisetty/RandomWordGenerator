import { Component } from '@angular/core';
import words from '../utility/words';
import arrayWord from '../utility/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'neurolab-angular';


word='';
limit=5;


handleSlideChanger(newLimit:any){
  this.limit=newLimit.currentTarget.value  ;

}
generator(){
  this.word=arrayWord.slice(0,this.limit).join(' ');
}







}
