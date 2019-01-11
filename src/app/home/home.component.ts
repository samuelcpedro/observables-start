import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumbers = Observable.interval(1000);
    // myNumbers.subscribe(
    //   (number: Number) => {
    //     console.log(number);
    //   }
    // );

    // const myObservable: Observable<string> = Observable.create((observer: Observer<string>) => {
    //   setTimeout(() => observer.next('First Package'), 2000);
    //   setTimeout(() => observer.next('Second Package'), 4000);
    //   setTimeout(() => observer.error('This does not work'), 5000);
    // });

    const myObservable: Observable<string> = Observable.create((observer: Observer<string>) => {
      setTimeout(() => observer.next('First_1 Package'), 1000);
      setTimeout(() => observer.next('First_2 Package'), 2000);
      setTimeout(() => observer.next('First_3 Package'), 3000);
      setTimeout(() => observer.next('Second Package'), 4000);
      // setTimeout(() => observer.error('This does not work'), 5000);
      setTimeout(() => observer.complete(), 5000);
      setTimeout(() => observer.next('Third Package'), 6000);
    });

    myObservable.subscribe(
      (data: string) => console.log(data),
      (error: string) => console.log(error),
      () => console.log('completed')
    );
  }

}
