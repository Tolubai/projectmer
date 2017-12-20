import { Component, OnInit } from '@angular/core';

import { Posts } from '../../shared/post/post';
import { PostService } from '../../shared/post/post.service';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'news-index',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  posts: Posts[];
  link: Posts;

  constructor(
    private postService: PostService,
    private router: Router) { 
    this.posts = [];
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  gotoLink(): void{
    this.router.navigate(['/', this.link.id]);
  }
}
