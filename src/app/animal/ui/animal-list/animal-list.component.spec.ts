import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalListComponent } from './animal-list.component';
import { By } from '@angular/platform-browser';

describe('AnimalListComponent', () => {
  let component: AnimalListComponent;
  let fixture: ComponentFixture<AnimalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render a input name when present', () => {
    const testName = 'Frogs';
    component.name = testName;

    fixture.detectChanges();

    const h1Element = fixture.nativeElement.querySelector('h1');
    expect(h1Element.textContent).toBe('List of Frogs');
  });

  it('should display the correct title', () => {
    const testName = 'Frogs';
    component.name = testName;

    fixture.detectChanges();

    const h1Element = fixture.nativeElement.querySelector('h1');
    expect(h1Element.textContent).toBe('List of Frogs');
  });

  describe('input: list', () => {
    beforeEach(() => {
      component.list = [
        { id: 1, name: 'Lion', traits: ['Fierce'] },
        { id: 2, name: 'Elephant', traits: ['Large', 'Loud'] },
        { id: 3, name: 'Giraffe', traits: ['Tall'] },
      ];

      fixture.detectChanges();
    });

    it('should display the correct number of animals', () => {
      const animalBoxes = fixture.debugElement.queryAll(By.css('.animalBox'));

      expect(animalBoxes.length).toBe(3);
    });

    it('should display the correct animal information', () => {
      const animalBoxes = fixture.nativeElement.querySelectorAll('.animalBox');

      expect(animalBoxes[0].textContent).toContain('Name: Lion');
      expect(animalBoxes[0].textContent).toContain('Traits: Fierce');
      expect(animalBoxes[1].textContent).toContain('Name: Elephant');
      expect(animalBoxes[1].textContent).toContain('Traits: Large,Loud');
      expect(animalBoxes[2].textContent).toContain('Name: Giraffe');
      expect(animalBoxes[2].textContent).toContain('Traits: Tall');
    });
  });
});
