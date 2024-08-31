import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';
import { DialogEditAdressComponent } from '../dialog-edit-adress/dialog-edit-adress.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  firestore: Firestore = inject(Firestore);
  userId: string | null = null;
  user: User = new User();

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      console.log('got id', this.userId);
      this.getUser();
    });
  }

  getUser() {
    if (this.userId) {
      const userDocRef = doc(this.firestore, 'users', this.userId);  // Erstellt eine Referenz zum Dokument
      docData(userDocRef).subscribe((user: any) => {
        this.user = new User (user );
        console.log('User-Daten empfangen:', this.user);
      });
    }
  }

  editMenu(){
    const dialog = this.dialog.open(DialogEditAdressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId || '';

  }

  editUserDetail(){
   const dialog = this.dialog.open(DialogEditUserComponent);
   dialog.componentInstance.user = new User(this.user.toJSON());
   dialog.componentInstance.userId = this.userId || '';

  }
}
