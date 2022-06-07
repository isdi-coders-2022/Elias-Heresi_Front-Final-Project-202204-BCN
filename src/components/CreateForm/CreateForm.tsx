import { ChangeEvent, useState, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { InitialCreatedEntryForm } from "../../redux/interfaces/DiaryInterface";
import { useAppDispatch } from "../../redux/store/hooks";
import { createEntryThunk } from "../../redux/thunks/diaryThunks/diaryThunks";
import { adaptToAcceptedDataTypes } from "../../utils/dataTransformation";
import { CreateFormContainer } from "./CreateFormContainer";

const CreateForm = (): JSX.Element => {
  const formInitialState = {
    date: new Date(),
    vitality: "5",
    positiveEmotion: "5",
    engagement: "5",
    relationships: "5",
    meaning: "5",
    accomplishment: "5",
    wellBeing: "5",
    commentary: "",
    image: "",
  } as InitialCreatedEntryForm;

  const [formData, setFormData] = useState(formInitialState);
  const dispatch = useAppDispatch();

  const changeData = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = (): void => {
    setFormData(formInitialState);
  };

  const navigate = useNavigate();

  const createEntry = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(createEntryThunk(adaptToAcceptedDataTypes(formData)));
    resetForm();
    navigate("historic");
  };

  return (
    <CreateFormContainer>
      <Form autoComplete="off" onSubmit={createEntry} noValidate>
        <Form.Group className="mb-3 create-form__slider">
          <Form.Label htmlFor="vitality">Vitality</Form.Label>
          <Form.Label className="create-form__sublabel">
            General health and feeling of safety
          </Form.Label>
          <Form.Range
            id="vitality"
            value={formData.vitality}
            onChange={changeData}
            placeholder="Vitality"
            min={0}
            max={10}
          />
          <p>{formData.vitality}</p>
        </Form.Group>
        <Form.Group className="mb-3 create-form__slider">
          <Form.Label htmlFor="positiveEmotion">Positive emotion</Form.Label>
          <Form.Label className="create-form__sublabel">
            Feelings of hope, joy, love pride and gratitude
          </Form.Label>
          <Form.Range
            id="positiveEmotion"
            value={formData.positiveEmotion}
            onChange={changeData}
            placeholder="Positive emotion"
            min={0}
            max={10}
          />
          <p>{formData.positiveEmotion}</p>
        </Form.Group>
        <Form.Group className="mb-3 create-form__slider">
          <Form.Label htmlFor="engagement">Engagement</Form.Label>
          <Form.Label className="create-form__sublabel">
            Feelings of hope, joy, love pride and gratitude
          </Form.Label>
          <Form.Range
            id="engagement"
            value={formData.engagement}
            onChange={changeData}
            placeholder="Engagement"
            min={0}
            max={10}
          />
          <p>{formData.engagement}</p>
        </Form.Group>
        <Form.Group className="mb-3 create-form__slider">
          <Form.Label htmlFor="relationships">Relationships</Form.Label>
          <Form.Label className="create-form__sublabel">
            Feelings of hope, joy, love pride and gratitude
          </Form.Label>
          <Form.Range
            id="relationships"
            value={formData.relationships}
            onChange={changeData}
            placeholder="Relationships"
            min={0}
            max={10}
          />
          <p>{formData.relationships}</p>
        </Form.Group>{" "}
        <Form.Group className="mb-3 create-form__slider">
          <Form.Label htmlFor="meaning">Meaning</Form.Label>
          <Form.Label className="create-form__sublabel">
            Feelings of hope, joy, love pride and gratitude
          </Form.Label>
          <Form.Range
            id="meaning"
            value={formData.meaning}
            onChange={changeData}
            placeholder="Meaning"
            min={0}
            max={10}
          />
          <p>{formData.meaning}</p>
        </Form.Group>
        <Form.Group className="mb-3 create-form__slider">
          <Form.Label htmlFor="accomplishment">Accomplishment</Form.Label>
          <Form.Label className="create-form__sublabel">
            Feelings of hope, joy, love pride and gratitude
          </Form.Label>
          <Form.Range
            id="accomplishment"
            value={formData.accomplishment}
            onChange={changeData}
            placeholder="Accomplishment"
            min={0}
            max={10}
          />
          <p>{formData.accomplishment}</p>
        </Form.Group>
        <Form.Group className="mb-3 create-form__file">
          <Form.Label>Add an image summarizing today</Form.Label>
          <Form.Control
            type="file"
            id="image"
            value={formData.image}
            onChange={changeData}
            placeholder="File selection"
          />
        </Form.Group>
        <Form.Group className="mb-3 create-form__text">
          <Form.Label>
            Write any reflections or thoughts that come to mind:
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            type="text"
            placeholder="Comments"
            id="commentary"
            value={formData.commentary}
            onChange={changeData}
          />
        </Form.Group>
        <Form.Group className="mb-3 create-form__slider">
          <Form.Label htmlFor="wellBeing">Well being</Form.Label>
          <Form.Label className="create-form__sublabel">
            Considering everything, how would you rate your general wellness?
          </Form.Label>
          <Form.Range
            id="wellBeing"
            value={formData.wellBeing}
            onChange={changeData}
            placeholder="Well being"
            min={0}
            max={10}
          />
          <p>{formData.wellBeing}</p>
        </Form.Group>
        <section className="container text-center">
          <Button variant="primary" type="submit">
            Create
          </Button>
          <Button
            variant="secondary"
            type="button"
            onClick={() => navigate("/home")}
          >
            Cancel
          </Button>
        </section>
      </Form>
    </CreateFormContainer>
  );
};

export default CreateForm;
