import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';

// rxjs
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserModel } from './../../models/user.model';
import { UserObservableService } from './../../services';
import { Location } from '@angular/common';
import { DialogService, CanComponentDeactivate } from './../../../core';

@Component({
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit, OnDestroy, CanComponentDeactivate {
    user!: UserModel;
    originalUser!: UserModel;
    private sub!: Subscription;

    constructor(
        private dialogService: DialogService,
        private userObservableService: UserObservableService,
        private location: Location,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.data.pipe(map(data => data.user)).subscribe((user: UserModel) => {
            this.user = { ...user };
            this.originalUser = { ...user };
        });        
    }

    ngOnDestroy(): void {
      this.sub?.unsubscribe();
    }

    canDeactivate():
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const flags = (Object.keys(this.originalUser) as (keyof UserModel)[]).map(key => {
          if (this.originalUser[key] === this.user[key]) {
            return true;
          }
          return false;
        });

        if (flags.every(el => el)) {
          return true;
        }

        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
  }

  onSaveUser(): void {
    const user = { ...this.user };
    const method = user.id ? 'updateUser' : 'createUser';
    const observer = {
      next: (savedUser: UserModel) => {
        this.originalUser = { ...savedUser };
        user.id
          ? // optional parameter: http://localhost:4200/users;editedUserID=2
            this.router.navigate(['users', { editedUserID: user.id }])
          : this.onGoBack();
      },
      error: (err: any) => console.log(err)
    };
    this.sub = this.userObservableService[method](user).subscribe(observer);
  }

  onGoBack(): void {
    this.location.back();
  }
}
