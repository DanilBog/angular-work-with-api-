export interface Value {
  id:number;
  joke:string;
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

  export interface norrisJokes {
    type: string;
    value: Value[];
  }

  export interface norrisJoke {
    type: string;
    value: Value;
  }


  export interface norrisCategory {
    type: string;
    value: [];
  }
  