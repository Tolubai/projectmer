import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Posts } from "./post";

@Injectable()
export class PostService {

    private headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });
  private postsUrl = '//outlet.kg/posts.php';

  constructor( private http: Http) { }

  getPosts(): Observable<Posts[]>{
    return this.http.get(this.postsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getPost(id: number): Observable<Posts> {
      return this.getPosts()
          .map((posts: Posts[]) => posts.find(post => post.id === id));
  }
  
  private extractData(res: Response) {
      let body = res.json();
      return body.data || {};
  }

  private handleError (error: Response | any) {
      // In a real world app, we might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
          errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
  }
}

