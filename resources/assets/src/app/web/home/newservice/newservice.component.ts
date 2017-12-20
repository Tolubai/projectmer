import { Component, OnInit } from '@angular/core';

import { Posts } from '../../../shared/post/post';
import { PostService } from '../../../shared/post/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-newservice',
  templateUrl: './newservice.component.html',
  styleUrls: ['./newservice.component.scss']
})
export class NewserviceComponent implements OnInit {

	posts: Posts[];
  	link: Posts;


	constructor(
	  	private postService: PostService,
	    private router: Router
	) { this.posts = [];}

	ngOnInit() {
		this.postService.getPosts().subscribe(posts => this.posts = posts);
	}

	gotoLink(): void{
		this.router.navigate(['/', this.link.id]);
	}

}
