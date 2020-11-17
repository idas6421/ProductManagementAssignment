import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        CommonModule,
        RouterTestingModule
      ],
      providers: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance as AppComponent;
    //fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

