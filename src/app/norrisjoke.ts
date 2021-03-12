export interface Value {
  id: number;
  joke: string;
  categories: [];
}


/*
export interface norrisJoke {
    type: string;
    value: Array<{
        id: number;
        joke: string;
    }>;
  }*/

export interface NorrisJokes {
  type: string;
  value: Value[];
}

export interface NorrisJoke {
  type: string;
  value: Value;
}

export interface NorrisCategory {
  type: string;
  value: [];
}
