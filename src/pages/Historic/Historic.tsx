import { useSelector } from "react-redux";
import EntrySummary from "../../components/EntrySummary/EntrySummary";
import NavBar from "../../components/NavBar/NavBar";
import { DiaryState } from "../../redux/interfaces/DiaryInterface";
import { RootState } from "../../redux/store/store";
import { HistoricContainer } from "./HistoricContainer";

const Historic = () => {
  const { collection }: DiaryState = useSelector(
    (state: RootState) => state.diary
  );

  console.log(collection[0]);

  return (
    <>
      <NavBar />
      <HistoricContainer>
        {collection.length > 0 &&
          collection.map((entry, index) => (
            <EntrySummary entry={entry} key={index} />
          ))}
      </HistoricContainer>
    </>
  );
};

export default Historic;
