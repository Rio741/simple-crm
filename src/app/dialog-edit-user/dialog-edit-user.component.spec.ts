import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideRemoteConfig, getRemoteConfig } from '@angular/fire/remote-config';

import { DialogEditUserComponent } from './dialog-edit-user.component';

describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DialogEditUserComponent,
        RouterModule.forRoot([]),
        MatDialogModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }, // Verwende {} statt []
        // Firebase providers
        provideFirebaseApp(() => initializeApp({
          projectId: "simple-crm-97a32",
          appId: "1:953524465907:web:69439d030dc1fd818c8786",
          storageBucket: "simple-crm-97a32.appspot.com",
          apiKey: "AIzaSyA5rRpuEkKrtZsJm6-drWguGHkvRTNeQAM",
          authDomain: "simple-crm-97a32.firebaseapp.com",
          messagingSenderId: "953524465907"
        })),
        provideFirestore(() => getFirestore()),
        provideDatabase(() => getDatabase()),
        provideFunctions(() => getFunctions()),
        provideStorage(() => getStorage()),
        provideRemoteConfig(() => getRemoteConfig())
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
