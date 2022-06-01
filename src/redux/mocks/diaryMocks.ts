import { DiaryEntry, Diary } from "../interfaces/DiaryInterface";

export const mockFirstEntry = {
  date: new Date("December 17, 2021 03:24:00"),
  vitality: 7,
  positiveEmotions: 5,
  engagement: 9,
  relationships: 2,
  meaning: 4,
  accomplishment: 6,
  wellBeing: 5,
  image: "url",
  commentary: "Today was OK",
} as DiaryEntry;

export const mockSecondEntry = {
  date: new Date("January 17, 2021 03:24:00"),
  vitality: 5,
  positiveEmotions: 7,
  engagement: 2,
  relationships: 7,
  meaning: 9,
  accomplishment: 2,
  wellBeing: 7,
  image: "url",
  commentary: "Today was better",
} as DiaryEntry;

export const mockDiary = {
  username: "champagne_papi",
  diary: [mockFirstEntry, mockSecondEntry],
} as Diary;
