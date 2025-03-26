import { Component } from '@angular/core';

export interface Card {
  title: string;
  body: string;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  /* 
  Here is an interview coding question, it looking for data transfer between component by using @Input and @Output in Angular,
  Find some resource to learn how to using @Input and @Output
  In this homework, you should implement two component,
  Parent component: the head should in this component
  Child component: title, body, color(button) should list in this component, this component should reusable
  the provided data should be transfer from the parent component to child component vis @Input
  the click event should be emit from child component to parent component @Output
  */
  title: string = 'hello angular';
  isdisabled: boolean = false;
  myid: number = 1234;
  isShow = true;
  currentColor = 'black';

  datalist: Card[] = [
    {
      title: 'Directives',
      body: 'The Angular directive helps us to manipulate the DOM. You can change the appearance, behavior, or layout of a DOM element using the directives. They help you to extend HTML. The Angular directives are classified into three categories based on how they behave.  They are Component, Structural and Attribute Directives',
      color: 'red',
    },
    {
      title: 'Pipes',
      body: 'The Angular pipes are used to Transform the Data. For Example, the Date pipe formats the date according to locale rules. We can pass arguments to pipe and chain pipes. The Angular also allows us to create the Custom Pipe',
      color: 'green',
    },
    {
      title: 'Component Life Cycle Hook',
      body: 'The life cycle hooks are the methods that angular invokes on directives and components as it creates, changes, and destroys them. Using life-cycle hooks we can fine-tune the behavior of our components during creation, update, and destruction.',
      color: 'blue',
    },
    {
      title: 'HTTP',
      body: 'The newly designed HttpClient Module allows us to query the Remote API source to get data into our Application. It requires us to Subscribe to the returned response using RxJs observables.',
      color: 'orange',
    },
  ];

  toggle() {
    this.isdisabled = !this.isdisabled;
  }
  controlIfCondition() {
    this.isShow = !this.isShow;
  }
  changeTitleColor(color: string) {
    this.currentColor = color;
  }
}