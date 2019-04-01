import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

const BASE_URL = 'https://pacific-headland-85124.herokuapp.com';//endpont url

@Component({
  selector: 'pokemon-detail',//selector/ custom element name
  templateUrl: './pokemon-detail.component.html',
  styleUrls: [ './pokemon-detail.component.css' ]
})
export class PokemonDetailComponent implements OnInit {

  record:any = {
    name:"loading",
    type_1:"loading",
    attack:"loading",
    defense:"loading",
    special_attack:"loading",
    special_defense:"loading",
    speed:"loading",
    hp:"loading"
  };

  constructor(private http:HttpClient, private route: ActivatedRoute) { }//inject module into component

   ngOnInit() {
      this.route.params.subscribe(params => {
          //params.id contains the value of the id variable in the url
          this.http.get(`${BASE_URL}/api/pokemon/${params.id}`).subscribe(data=>{
            this.record = data;//pulls data for the pokeid specified in url
          })
      });
  }
}
