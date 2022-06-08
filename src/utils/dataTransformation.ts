import {
  EntryObtainedFromApi,
  InitialCreatedEntryForm,
} from "../redux/interfaces/DiaryInterface";

export const adaptToAcceptedDataTypes = (entry: InitialCreatedEntryForm) => {
  const image = entry.image === "" ? "No image submitted" : entry.image;
  const commentary =
    entry.commentary === "" ? "No commentary submitted" : entry.commentary;

  return {
    ...entry,
    positiveEmotion: parseInt(entry.positiveEmotion, 10),
    engagement: parseInt(entry.engagement, 10),
    relationships: parseInt(entry.relationships, 10),
    meaning: parseInt(entry.meaning, 10),
    accomplishment: parseInt(entry.accomplishment, 10),
    wellBeing: parseInt(entry.wellBeing, 10),
    vitality: parseInt(entry.vitality, 10),
    image,
    commentary,
  };
};

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
