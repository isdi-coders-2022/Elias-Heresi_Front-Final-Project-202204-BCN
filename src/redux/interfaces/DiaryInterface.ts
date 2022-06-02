export interface DiaryEntry {
  date: Date;
  vitality: number;
  positiveEmotions: number;
  engagement: number;
  relationships: number;
  meaning: number;
  accomplishment: number;
  wellBeing: number;
  image: string;
  commentary: string;
}

export interface Diary {
  username: string;
  diary: Collection;
}

export type Collection = DiaryEntry[] | never[];

export interface DiaryState {
  page: number;
  perPage: number;
  total: number;
  collection: Collection;
}

export interface FakeInterface {
  change: string;
}
