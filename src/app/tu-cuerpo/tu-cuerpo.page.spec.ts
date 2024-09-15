import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TuCuerpoPage } from './tu-cuerpo.page';

describe('TuCuerpoPage', () => {
  let component: TuCuerpoPage;
  let fixture: ComponentFixture<TuCuerpoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TuCuerpoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
