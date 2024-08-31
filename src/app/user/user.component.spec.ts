import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideRemoteConfig, getRemoteConfig } from '@angular/fire/remote-config';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserComponent
      ],
      providers: [
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

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
