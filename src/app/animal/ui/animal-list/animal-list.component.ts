import { CommonModule } from '@angular/common';
import { Animal } from './../../data-access/animal.model';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalListComponent {
  @Input()
  name!: string;

  @Input()
  list!: Animal[];

}
