import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  changePageActionCreator,
  nextPageActionCreator,
  previousPageActionCreator,
} from "../../redux/features/pageSlice";
import { DiaryState } from "../../redux/interfaces/DiaryInterface";
import { useAppDispatch } from "../../redux/store/hooks";
import { RootState } from "../../redux/store/store";

const Paginator = (): JSX.Element => {
  const { page, perPage, total }: DiaryState = useSelector(
    (state: RootState) => state.diary
  );

  const lastPage = Math.ceil(total / perPage);
  const dispatch = useAppDispatch();

  let items = [];
  for (let item = 1; item <= lastPage; item++) {
    items.push(
      <Pagination.Item
        key={item}
        active={item === page}
        onClick={() => dispatch(changePageActionCreator(item))}
      >
        {item}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.First onClick={() => dispatch(changePageActionCreator(1))} />
      <Pagination.Prev
        onClick={() => {
          if (page !== 1) {
            dispatch(previousPageActionCreator());
          }
        }}
      />
      {items}
      <Pagination.Next
        onClick={() => {
          if (page !== lastPage) dispatch(nextPageActionCreator());
        }}
      />
      <Pagination.Last
        onClick={() => dispatch(changePageActionCreator(lastPage))}
      />
    </Pagination>
  );
};

export default Paginator;
