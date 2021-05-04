import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostModel} from '../../models/post.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AppState} from '../../store/app.state';
import {getPostById} from '../state/posts.selector';
import {updatePost} from '../state/posts.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
  post: PostModel;
  postForm: FormGroup;
  postSubscription: Subscription;
  constructor(private store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // console.log(params.get('id'));
      const id = params.get('id');
      this.postSubscription = this.store
        .select(getPostById, {id})
        .subscribe((data) => {
        this.post = data;
        this.createForm();
        // console.log(this.post);
      });
    });
    // this.createForm();
    // this.store.select(getPostById).subscribe((post) => {
    //   if (post) {
    //     this.post = post;
    //     this.postForm.patchValue({
    //       title: post.title,
    //       description: post.description,
    //     });
    //   }
    // });
  }

  createForm(): void {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit(): void {
    if (!this.postForm.valid) {
      return;
    }

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    const post: PostModel = {
      id: this.post.id,
      title,
      description,
    };

    // dispatch the action
    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['posts']);
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

}
