import {
  EntryObtainedFromApi,
  InitialCreatedEntryForm,
} from "../redux/interfaces/DiaryInterface";

export const adaptToString = (
  entry: EntryObtainedFromApi
): InitialCreatedEntryForm => {
  return {
    ...entry,
    positiveEmotion: entry.positiveEmotion.toString(),
    engagement: entry.engagement.toString(),
    relationships: entry.relationships.toString(),
    meaning: entry.meaning.toString(),
    accomplishment: entry.accomplishment.toString(),
    wellBeing: entry.wellBeing.toString(),
    vitality: entry.vitality.toString(),
    image: "",
  };
};
