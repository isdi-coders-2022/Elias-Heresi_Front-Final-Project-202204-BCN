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

export const mockApiGetResponse = {
  username: "marta",
  diary: [
    {
      date: "2020-05-18T14:10:30.000Z",
      vitality: 4,
      positiveEmotion: 10,
      engagement: 4,
      relationships: 7,
      meaning: 4,
      accomplishment: 6,
      wellBeing: 6,
      image:
        "https://thumbs.dreamstime.com/b/cierra-los-empresarios-d%C3%A1ndole-la-mano-durante-una-reuni%C3%B3n-empresa-de-negocios-transacciones-apret%C3%B3n-manos-165281340.jpg",
      commentary: "Had a good day at the office. Excited on what is coming",
      id: null,
    },
  ],
  id: "62972bb8798815da176d11b4",
};
