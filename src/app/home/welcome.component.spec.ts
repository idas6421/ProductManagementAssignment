import { TestBed } from "@angular/core/testing";
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: any;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance as WelcomeComponent;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});