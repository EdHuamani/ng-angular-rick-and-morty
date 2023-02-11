import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  form: any = {
    username: null,
    email: null,
    fullname: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  isSuccessful = false;
  isUpdatedFailed = false;
  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    this.currentUser = this.storageService.getUser();
    const { username, email, fullname } = this.currentUser;
    this.form = { username, email, fullname };
  }

  onSubmit(): void {
    this.authService.update(this.currentUser._id, this.form).subscribe({
      next: response => {
        this.storageService.saveUser(response.data);

        this.isUpdatedFailed = false;
        this.isSuccessful = true;
        // this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isUpdatedFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
