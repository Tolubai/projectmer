import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Subscription } from 'rxjs/Subscription';

import { Posts } from '../../../shared/post/post';
import { PostService } from '../../../shared/post/post.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'news-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  post: Posts;
  sub: Subscription;
  errorMessage = '';
  public href: string = "";
  public postName: string = "";

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    private title: Title
  ) { 

    meta.addTags([
      {
        name: 'author', content: 'meria.kg'
      },
      {
        name: 'keywords', content: 'пост, статья'
      },
      {
        meta: 'description', content: 'Описание статьи'
      }
    ])

  }

  ngOnInit() {

    // Get post
    this.sub = this.route.params.subscribe(params => {
      let postID = +params['id'];
      this.postService.getPost(postID).subscribe(post => {
        this.post = post;
        this.title.setTitle(this.post.titleKg);
      }, error => this.errorMessage = 'Could not load item comments.');
    });
    // Current url
    this.href = this.router.url;

  }

}
