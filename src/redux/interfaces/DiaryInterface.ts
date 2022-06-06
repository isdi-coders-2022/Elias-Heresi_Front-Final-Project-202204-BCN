export interface InitialCreatedEntryForm {
  date: Date;
  vitality: string;
  positiveEmotion: string;
  engagement: string;
  relationships: string;
  meaning: string;
  accomplishment: string;
  wellBeing: string;
  image: string;
  commentary: string;
}

export interface TransformedEntryForm {
  date: Date;
  vitality: number;
  positiveEmotion: number;
  engagement: number;
  relationships: number;
  meaning: number;
  accomplishment: number;
  wellBeing: number;
  image: string;
  commentary: string;
}

export interface FinalCreatedEntryForm extends TransformedEntryForm {
  id: string;
}

export interface EntryObtainedFromApi {
  date: Date;
  vitality: number;
  positiveEmotion: number;
  engagement: number;
  relationships: number;
  meaning: number;
  accomplishment: number;
  wellBeing: number;
  image: string;
  commentary: string;
}
export interface DiaryEntry extends EntryObtainedFromApi {
  id: string;
}

export type Collection = DiaryEntry[] | never[];

export interface GetApiResponse {
  data: { entries: Collection };
}
export interface Diary {
  username: string;
  diary: Collection;
}

export interface DiaryState {
  page: number;
  perPage: number;
  total: number;
  collection: Collection;
}
