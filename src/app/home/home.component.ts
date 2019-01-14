import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000)
      .pipe(map((data: number) => data * 2));

    this.numbersObsSubscription = myNumbers.subscribe(
      (number: Number) => {
        console.log(number);
      }
    );

    // const myObservable: Observable<string> = Observable.create((observer: Observer<string>) => {
    //   setTimeout(() => observer.next('First Package'), 2000);
    //   setTimeout(() => observer.next('Second Package'), 4000);
    //   setTimeout(() => observer.error('This does not work'), 5000);
    // });

    const myObservable: Observable<string> = Observable.create((observer: Observer<string>) => {
      setTimeout(() => observer.next('First Package'), 2000);
      setTimeout(() => observer.next('Second Package'), 4000);
      // setTimeout(() => observer.error('This does not work'), 5000);
      setTimeout(() => observer.complete(), 5000);
      setTimeout(() => observer.next('Third Package'), 6000);
    });

    this.customObsSubscription = myObservable.subscribe(
      (data: string) => console.log(data),
      (error: string) => console.log(error),
      () => console.log('completed')
    );
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
