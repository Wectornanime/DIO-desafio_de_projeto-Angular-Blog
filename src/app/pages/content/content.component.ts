import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = '';
  contentTitle:string = '';
  contentDescription:string = '';
  private Id:string | null = '0';

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.Id = value.get('id') )

    this.setValuestoComponent(this.Id)
  }

  setValuestoComponent( id:string | null ) {
    const result = dataFake.filter( articale => articale.id == id)[0]

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }

}
