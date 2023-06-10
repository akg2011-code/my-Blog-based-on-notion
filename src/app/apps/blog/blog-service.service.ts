import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { blogs } from './blog-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// ACCESS CONSTANTS
export const NOTION = {
  bearerToken: 'secret_BH3YLi2FPlQSsqr6CLnVCCvgquRiFu2GAlDRkF2KFC4',
  database: {
    api: 'https://api.notion.com/v1/databases',
    id: 'da246526214a4f90896fbe9aa2ce3627',
  },
  page: {
    api: 'https://api.notion.com/v1/pages',
    id: '750c2620100f40e988c12432a87dbd9d',
  },
};

// HEADERS
export const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${NOTION.bearerToken}`,
    'Notion-Version': '2021-08-16',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ServiceblogService {
  Blogs: any[] = [];
  loginStatusService = false;

  detailId: number = -1;
  showEdit = false;

  constructor(public http: HttpClient) {}

  public getBlog(): Observable<any> {
    return of(blogs);
  }

  public addPost(bl: any) {
    this.Blogs.splice(0, 0, bl);
  }

  public deletePost(id: number) {
    this.Blogs = this.Blogs.filter((b) => b.id !== id);
  }

  getDatabase() {
    return this.http.get(
      'https://cors.yasbr.com/' +
        NOTION.database.api +
        '/' +
        NOTION.database.id,
      headerOptions
    );
  }
}
