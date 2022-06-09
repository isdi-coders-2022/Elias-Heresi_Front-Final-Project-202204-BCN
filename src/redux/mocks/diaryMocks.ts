import EntrySummary from "../../components/EntrySummary/EntrySummary";
import {
  DiaryEntry,
  Diary,
  TransformedEntryForm,
} from "../interfaces/DiaryInterface";

export const mockFirstEntry = {
  date: new Date("December 17, 2021 03:24:00"),
  vitality: 7,
  positiveEmotion: 5,
  engagement: 9,
  relationships: 2,
  meaning: 4,
  accomplishment: 6,
  wellBeing: 5,
  image: "url",
  backup: "",
  commentary: "Today was OK",
  id: "aa",
} as DiaryEntry;

export const mockSecondEntry = {
  date: new Date("January 17, 2021 03:24:00"),
  vitality: 5,
  positiveEmotion: 7,
  engagement: 2,
  relationships: 7,
  meaning: 9,
  accomplishment: 2,
  wellBeing: 7,
  image: "url",
  backup: "",
  commentary: "Today was better",
  id: "aa",
} as DiaryEntry;

export const mockCreatedEntry = () => {
  const entry = new FormData();
  entry.append("date", new Date("December 17, 2021 03:24:00").toISOString());
  entry.append("vitality", "7");
  entry.append("positiveEmotion", "7");
  entry.append("engagement", "7");
  entry.append("relationships", "7");
  entry.append("meaning", "7");
  entry.append("accomplishment", "7");
  entry.append("image", "url");
  entry.append("commentary", "Today was OK");
  return entry;
};

export const mockDiary = {
  username: "champagne_papi",
  diary: [mockFirstEntry, mockSecondEntry],
} as Diary;

export const mockApiId = "aa";

export const mockApiGetResponse = [
  {
    date: new Date("December 17, 1995 03:24:00"),
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
    backup: "",
    id: mockApiId,
  },
];

export const mockApiStringifiedResponse = [
  {
    date: new Date("December 17, 1995 03:24:00").toISOString(),
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
    backup: "",
    id: mockApiId,
  },
];
