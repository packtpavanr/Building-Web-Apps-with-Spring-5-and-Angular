import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AuthService } from './auth/auth.service';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let authService: AuthService;
  let authServiceStub;

  beforeEach(async(() => {

    authServiceStub = {
      isLoggedIn: false,
      user: {name: 'Micky'}
    };

    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers:    [ {provide: AuthService, useValue: authServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    authService = fixture.debugElement.injector.get(AuthService);
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch('Welcome to ' + comp.appName);
  });

  it('should display a different app name', () => {
    comp.appName = 'Test HealthApp';
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch('Welcome to ' + comp.appName);
  });

  it('should display username as Guest for unauthenticated user', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toContain('Guest');
  });

});
