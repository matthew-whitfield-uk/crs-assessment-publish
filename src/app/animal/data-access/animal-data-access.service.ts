import { Injectable } from '@angular/core';
import { Animal, Animals } from './animal.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { superSetData } from './animal.data';

@Injectable({
  providedIn: 'root',
})
export class AnimalDataAccessService {
  private animalLists$ = new BehaviorSubject<Animals>({
    dogs: [],
    cats: [],
  });

  private isEditing$ = new BehaviorSubject<boolean>(false);
  private editorSuperSet$ = new BehaviorSubject<Animal[]>([]);
  private editorSet$ = new BehaviorSubject<Animal[]>([]);
  private editorName$ = new BehaviorSubject<string>('');

  getAnimalLists$(): Observable<Animals> {
    return this.animalLists$.asObservable();
  }

  getIsEditing$() {
    return this.isEditing$.asObservable();
  }

  startUpdating(animal: string) {
    let nextEditorSuperSet = superSetData[animal as keyof Animals];
    const nextEditorSet =
      this.animalLists$.getValue()[animal as keyof Animals];
    const idsInEditorSet = new Set(nextEditorSet.map((animal) => animal.id));
    nextEditorSuperSet = nextEditorSuperSet.filter(
      (animal) => !idsInEditorSet.has(animal.id)
    );
    this.editorSuperSet$.next(nextEditorSuperSet);
    this.editorSet$.next(nextEditorSet);
    this.editorName$.next(animal);
    this.isEditing$.next(true);
  }

  stopUpdate() {
    this.isEditing$.next(false);
  }

  saveAndCloseEditor() {
    const animalList = this.animalLists$.getValue();
    const editorNameToSave = this.editorName$.getValue();
    const editorItemsToSave = this.editorSet$.getValue();
    animalList[editorNameToSave as keyof Animals] = editorItemsToSave;
    this.animalLists$.next(animalList);
    this.isEditing$.next(false);
  }

  getEditorSuperSet$() {
    return this.editorSuperSet$.asObservable();
  }

  getEditorSet$() {
    return this.editorSet$.asObservable();
  }

  getEditorName$() {
    return this.editorName$.asObservable();
  }

  addEditorItem(id: number) {
    const editorSet = this.editorSet$.getValue();
    const editorSuperSet = this.editorSuperSet$.getValue();
    const itemToAdd = editorSuperSet.filter((item) => item.id === id);
    this.editorSet$.next([...editorSet, ...itemToAdd]);
    this.editorSuperSet$.next(editorSuperSet.filter((item) => item.id !== id));
  }

  removeEditorItem(id: number) {
    const editorSet = this.editorSet$.getValue();
    const editorSuperSet = this.editorSuperSet$.getValue();
    const itemToRemove = editorSet.filter((item) => item.id === id);
    this.editorSet$.next(editorSet.filter((item) => item.id !== id));
    this.editorSuperSet$.next([...editorSuperSet, ...itemToRemove]);
  }

  addAllEditorItems() {
    const editorSet = this.editorSet$.getValue();
    const editorSuperSet = this.editorSuperSet$.getValue();
    this.editorSet$.next([...editorSet, ...editorSuperSet]);
    this.editorSuperSet$.next([]);
  }

  removeAllEditorItems() {
    const editorSet = this.editorSet$.getValue();
    const editorSuperSet = this.editorSuperSet$.getValue();
    this.editorSet$.next([]);
    this.editorSuperSet$.next([...editorSet, ...editorSuperSet]);
  }
}
