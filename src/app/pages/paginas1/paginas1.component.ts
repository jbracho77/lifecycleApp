import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-paginas1',
  templateUrl: './paginas1.component.html',
  styles: [
  ]
})
export class Paginas1Component implements 
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  nombre: string = '';
  segundos: number = 0;
  timerSusbcription!: Subscription;

  constructor() {
    console.log('construtor');
   }
   
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSusbcription.unsubscribe();
  }
  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSusbcription = interval(1000).subscribe( i => {
      this.segundos = i;
    })
 
  }

  guardar() {

  }
}
