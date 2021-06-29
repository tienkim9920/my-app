import { Directive, ElementRef, HostListener } from '@angular/core';
// import { inside, outside } from './redux/showmenu.actions';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';

@Directive({
  selector: '[appShowcarts]'
})
export class ShowcartsDirective {

  // statusMenu$: Observable<any>;
 
  // constructor(public el: ElementRef, private store: Store<{ statusMenu: any }>) {
  //   this.statusMenu$ = store.select('statusMenu');
  // }

  // @HostListener('document:click', ['$event']) click(event: any){
  //   if (this.el.nativeElement.contains(event.target)){
  //     console.log("Click Inside")
  //     this.store.dispatch(inside())
  //   }else{
  //     console.log("Click OutSide")
  //     this.store.dispatch(outside())
  //   }
  // }

}
