import { TestBed } from "@angular/core/testing";
import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: any;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance as PageNotFoundComponent;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});