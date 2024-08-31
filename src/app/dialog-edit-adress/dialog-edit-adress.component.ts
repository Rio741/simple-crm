import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogContent, MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-adress',
  standalone: true,
  imports: [CommonModule,FormsModule, MatDialogContent, MatDialogActions, MatFormFieldModule, MatIconModule, MatInputModule, MatDatepickerModule, MatProgressBarModule],
  templateUrl: './dialog-edit-adress.component.html',
  styleUrl: './dialog-edit-adress.component.scss'
})
export class DialogEditAdressComponent {
  constructor(public dialogRef: MatDialogRef<DialogEditAdressComponent>) {}

  user: User = new User();
 loading = false;
 userId:string = '';
 firestore: Firestore = inject(Firestore);


 safeUser() {
  this.loading = true;
  const userDocRef = doc(this.firestore, `users/${this.userId}`);
  updateDoc(userDocRef, this.user.toJSON())
    .then(() => {
      console.log('User updated successfully');
      this.loading = false;
        this.dialogRef.close();
    })
    .catch((error) => {
      console.error('Error updating user: ', error);
    });
}
}
