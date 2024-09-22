import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalViewerFeatureShellComponent } from './animal-feature.component';

describe('AnimalViewerFeatureShellComponent', () => {
  let component: AnimalViewerFeatureShellComponent;
  let fixture: ComponentFixture<AnimalViewerFeatureShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalViewerFeatureShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalViewerFeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
