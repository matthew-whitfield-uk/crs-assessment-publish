import { Component, Input, inject, OnChanges } from '@angular/core';
import { AnimalDataAccessService } from '../../data-access/animal-data-access.service';
import { Animal } from '../../data-access/animal.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animal-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-editor.component.html',
  styleUrl: './animal-editor.component.scss',
})
export class AnimalEditorComponent {
  animalDataAccessService = inject(AnimalDataAccessService);
  name$: Observable<string>;
  superSet$: Observable<Animal[]>;
  animalCurrentSet$: Observable<Animal[]>;

  constructor() {
    this.superSet$ = this.animalDataAccessService.getEditorSuperSet$();
    this.animalCurrentSet$ = this.animalDataAccessService.getEditorSet$();
    this.name$ = this.animalDataAccessService.getEditorName$();
  }

  addItem(id: number) {
    this.animalDataAccessService.addEditorItem(id);
  }

  removeItem(id: number) {
    this.animalDataAccessService.removeEditorItem(id);
  }

  addAllItems() {
    this.animalDataAccessService.addAllEditorItems();
  }

  removeAllItems() {
    this.animalDataAccessService.removeAllEditorItems();
  }

  saveAndClose() {
    this.animalDataAccessService.saveAndCloseEditor();
  }

  cancelAndClose() {
    this.animalDataAccessService.stopUpdate();
  }
}
