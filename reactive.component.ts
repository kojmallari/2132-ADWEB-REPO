import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    /*const interval$ = interval(1000);
    interval$.subscribe(val => console.log('stream 1' + val));
    const click$ = fromEvent(document, 'click');
    click$.subscribe(evt => console.log('Mouse Clicked' + evt));*/

    const observable = new Observable(Subscriber =>
    {
      Subscriber.next(1);
      Subscriber.next(2);
      Subscriber.next(3);
      setTimeout(() => {
        Subscriber.next(4);
        Subscriber.complete(); }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
      next(x) { console.log('got value' + x); },
      error(err) { console.error('something went wrong' + err); },
      complete() { console.log('finished!'); }
    });
    console.log('just after subscribe');
  }

}
