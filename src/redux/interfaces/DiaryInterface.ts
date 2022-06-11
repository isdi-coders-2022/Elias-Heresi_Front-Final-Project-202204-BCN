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
  backup: string;
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
  backup: string;
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
  backup: string;
}

export interface Entry {
  entry: EntryObtainedFromApi;
}

export interface OptionalEntry extends Entry {}

export const defaultProps: OptionalEntry = {
  entry: {
    date: new Date(),
    vitality: 5,
    positiveEmotion: 5,
    engagement: 5,
    relationships: 5,
    meaning: 5,
    accomplishment: 5,
    wellBeing: 5,
    image: "",
    commentary: "",
    backup: "",
  },
};
export interface DiaryEntry extends EntryObtainedFromApi {
  id: string;
}

export type Collection = DiaryEntry[] | never[];

export interface GetApiResponse {
  data: { entries: Collection };
}

export interface EntryApiResponse {
  data: { entry: DiaryEntry };
}

export interface Diary {
  username: string;
  diary: Collection;
}

export interface DiaryState {
  collection: Collection;
}
