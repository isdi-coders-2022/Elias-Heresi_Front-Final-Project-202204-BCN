import {
  EntryObtainedFromApi,
  InitialCreatedEntryForm,
} from "../redux/interfaces/DiaryInterface";

export const adaptToAcceptedDataTypes = (entry: InitialCreatedEntryForm) => {
  const commentary =
    entry.commentary === "" ? "No commentary submitted" : entry.commentary;

  return {
    ...entry,
    positiveEmotion: Number(entry.positiveEmotion),
    engagement: Number(entry.engagement),
    relationships: Number(entry.relationships),
    meaning: Number(entry.meaning),
    accomplishment: Number(entry.accomplishment),
    wellBeing: Number(entry.wellBeing),
    vitality: Number(entry.vitality),
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
