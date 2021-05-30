import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: string[] = [];
  searchText: string = '';
  selectedText: string = 'Chosen Div Text';
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((res: any) => { this.data = res[0].split(' '); });
  }

  select(text: string) {
    this.selectedText = text;
  }

}
