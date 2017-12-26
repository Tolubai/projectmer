import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Posts } from '../../shared/post/post';
import { PostService } from '../../shared/post/post.service';


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
    private router: Router,
    private title: Title) { 
    this.posts = [];
  }

  ngAfterViewChecked() {
    this.title.setTitle('Все новости');
    window.scrollTo(0, 0);
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  gotoLink(): void{
    this.router.navigate(['/', this.link.id]);
  }
}
