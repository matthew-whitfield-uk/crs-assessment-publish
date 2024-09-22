import { Component, inject } from '@angular/core';
import { AnimalListComponent } from "../ui/animal-list/animal-list.component";
import { AnimalDataAccessService } from '../data-access/animal-data-access.service';
import { Observable } from 'rxjs';
import { Animals, Animal } from '../data-access/animal.model';
import { CommonModule } from '@angular/common';
import { AnimalEditorComponent } from "../ui/animal-editor/animal-editor.component";



@Component({
  selector: 'app-animal-feature',
  standalone: true,
  imports: [AnimalListComponent, CommonModule, AnimalEditorComponent],
  providers: [AnimalDataAccessService],
  templateUrl: './animal-feature.component.html',
  styleUrl: './animal-feature.component.scss'
})
export class AnimalViewerFeatureShellComponent {

  private animalDataAccessService = inject(AnimalDataAccessService)

  animalLists$: Observable<Animals>;
  isEditing$: Observable<boolean>;


  constructor() {
    this.animalLists$ = this.animalDataAccessService.getAnimalLists$();
    this.isEditing$ = this.animalDataAccessService.getIsEditing$();
  }

  startEditting(animalName: string) {
    this.animalDataAccessService.startUpdating(animalName);
  }


}
