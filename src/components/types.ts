export interface Deleted {
  deleted: true;
  id: number;
  time: number;
  type: "comment" | "story";
}

export interface Story {
  by: string;
  descendants: number;
  id: number;
  title: string;
  type: "story";
  url: string;
  score: number;
  kids?: Array<number>;
  time: number;
}

export interface Comment {
  by: string;
  id: number;
  type: "comment";
  kids?: Array<number>;
  time: number;
  text: string;
}
