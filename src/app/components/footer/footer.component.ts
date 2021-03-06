import { Component, OnInit } from '@angular/core';
import { Filter, FilterButton } from '../../models/filtering.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  filterButtons:FilterButton[]=[
    {type:Filter.All, label:'All', isActive:true},
    {type:Filter.Active, label:'Active', isActive:false},
    {type:Filter.Completed, label:'Completed', isActive:false}
  ];

  length=0;
  constructor() { }

  ngOnInit(): void {
  }

}
