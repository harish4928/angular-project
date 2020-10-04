import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {
showdata;
newsdata;
  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    const url ="http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-02&sortBy=publishedAt&apiKey=5d7e96af72c749d2a9802eabeb0e5581";
    this.http.get(url).subscribe(res =>{
    this.showdata=res;
    this.newsdata=this.showdata.articles;
    console.log(this.newsdata);  
  })
  }

}
