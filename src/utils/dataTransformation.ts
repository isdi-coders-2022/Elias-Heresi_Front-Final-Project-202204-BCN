import {
  InitialCreatedEntryForm,
  FinalCreatedEntryForm,
} from "../redux/interfaces/DiaryInterface";

export const stringsToNumbers = (entry: InitialCreatedEntryForm) => {
  return {
    ...entry,
    positiveEmotion: parseInt(entry.positiveEmotion, 10),
    engagement: parseInt(entry.engagement, 10),
    relationships: parseInt(entry.relationships, 10),
    meaning: parseInt(entry.meaning, 10),
    accomplishment: parseInt(entry.accomplishment, 10),
    wellBeing: parseInt(entry.wellBeing, 10),
    vitality: parseInt(entry.vitality, 10),
  };
};
export const transformDateToString = (entry: FinalCreatedEntryForm) => {
  return {
    ...entry,
    date: entry.date.toISOString(),
  };
};
