import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  currId= 1;
  
  constructor(private router: Router) {}
 
    ngOnInit() {
       this.router.events.subscribe(val => {
            if (val instanceof RoutesRecognized) {
                this.currId = +val.state.root.firstChild.params.id;
                // this.router.navigate([`/pokemon/${this.currId}`]);
                console.log(this.currId);
            }
        });
  }
}
