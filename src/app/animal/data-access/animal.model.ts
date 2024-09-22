export interface Animals {
  dogs: Animal[];
  cats: Animal[];
}

export interface Animal {
  id: number;
  name: string;
  traits: string[];
}
