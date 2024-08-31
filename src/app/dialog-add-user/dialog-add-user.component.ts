import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogContent, MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core'; 
import {User} from './../../models/user.class'; 
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatDialogContent, CommonModule, FormsModule, MatDialogActions, MatFormFieldModule, MatIconModule, MatInputModule, MatDatepickerModule, MatProgressBarModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  providers: [provideNativeDateAdapter()],
})

export class DialogAddUserComponent {
  user = new User();
  birthDate: Date;
  loading = false;
  firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {
    this.birthDate = new Date();
  }

  public safeUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
  
    const usersCollection = collection(this.firestore, 'users');
    
    addDoc(usersCollection, this.user.toJSON())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
        console.log('User added successfully', this.user);
      })
      .catch((error) => {
        this.loading = false;
        this.dialogRef.close();
        console.error('Error adding user: ', error);
      });
  }
}
 

