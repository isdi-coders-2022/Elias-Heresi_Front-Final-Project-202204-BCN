import { DiaryEntry, Diary } from "../interfaces/DiaryInterface";

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

export const mockedFile = {
  lastModified: 1654865480296,
  lastModifiedDate: new Date(),
  name: "1654860763859-88B018C3-515F-4F71-BE70-FED3A8680808.jpeg",
  size: 545880,
  type: "image/jpeg",
  webkitRelativePath: "",
};

export const mockProps = {
  dates: ["Date 1", "Date 2", "Date 3", "Date 4"],
  wellBeing: [1, 2, 3, 4],
  positiveEmotion: [1, 2, 3, 4],
  engagement: [1, 2, 3, 4],
  relationships: [1, 2, 3, 4],
  meaning: [1, 2, 3, 4],
  accomplishment: [1, 2, 3, 4],
  vitality: [1, 2, 3, 4],
};
