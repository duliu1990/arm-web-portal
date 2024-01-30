import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-data',
  templateUrl: './archive-data.component.html',
  styleUrls: ['./archive-data.component.scss']
})
export class ArchiveDataComponent implements OnInit {

  expandKeys = ['100', '1001'];

  value?: string;

  nodes = [];

  constructor(private http: HttpClient) { }

  onChange($event: string): void {
    console.log($event);
  }

  ngOnInit(): void {
    this.http.get<any>('/assets/data/archive-data.json').subscribe(el => {
      this.nodes = el;
    });

    // mock async
    setTimeout(() => {
      this.value = '1001';
    }, 1000);
  }
}
