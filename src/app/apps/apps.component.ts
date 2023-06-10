import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from './blog/blog-service.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css'],
})
export class AppsComponent implements OnInit {
  constructor(private blogService: ServiceblogService) {}

  ngOnInit(): void {
    this.blogService.getDatabase().subscribe((data) => {
      console.log(data);
    });
  }
}
