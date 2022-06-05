import { ChangeEvent, useState, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { CreateEntryForm } from "../../redux/interfaces/DiaryInterface";
import { CreateFormContainer } from "./CreateFormContainer";
import RangeSlider from "react-bootstrap-range-slider";

const CreateForm = (): JSX.Element => {
  const formInitialState = {
    vitality: "5",
    positiveEmotion: "5",
    engagement: "5",
    relationships: "5",
    meaning: "5",
    accomplishment: "5",
    wellBeing: "5",
    commentary: "",
    image: "",
  } as CreateEntryForm;

  const [formData, setFormData] = useState(formInitialState);

  const changeData = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = (): void => {
    setFormData(formInitialState);
  };

  const createEntry = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    resetForm();
  };

  const navigateToHome = (): void => {
    console.log("Hola");
  };
  return (
    <CreateFormContainer>
      <Form autoComplete="off" onSubmit={createEntry} noValidate>
        <Form.Group className="mb-3 create-form__slider">
          <Form.Label htmlFor="vitality">Vitality</Form.Label>
          <Form.Label className="create-form__sublabel">
            General health and feeling of safety
          </Form.Label>
          <RangeSlider
            variant="success"
            id="vitality"
            value={formData.vitality}
            onChange={changeData}
            placeholder="Vitality"
            min={0}
            max={10}
          />
        </Form.Group>
        <Form.Group className="mb-3 create-form__slider">
          <Form.Label htmlFor="positiveEmotion">Positive emotion</Form.Label>
          <Form.Label className="create-form__sublabel">
            Feelings of hope, joy, love pride and gratitude
          </Form.Label>
          <RangeSlider
            id="positiveEmotion"
            value={formData.positiveEmotion}
            onChange={changeData}
            placeholder="Positive emotion"
            min={0}
            max={10}
          />
        </Form.Group>
        <Form.Group className="mb-3 create-form__slider">
          <Form.Label htmlFor="engagement">Engagement</Form.Label>
          <Form.Label className="create-form__sublabel">
            Feelings of hope, joy, love pride and gratitude
          </Form.Label>
          <RangeSlider
            id="engagement"
            value={formData.engagement}
            onChange={changeData}
            placeholder="Engagement"
            min={0}
            max={10}
          />
        </Form.Group>
        <Form.Group className="mb-3 create-form__slider">
          <Form.Label htmlFor="relationships">Relationships</Form.Label>
          <Form.Label className="create-form__sublabel">
            Feelings of hope, joy, love pride and gratitude
          </Form.Label>
          <RangeSlider
            id="relationships"
            value={formData.relationships}
            onChange={changeData}
            placeholder="Relationships"
            min={0}
            max={10}
          />
        </Form.Group>{" "}
        <Form.Group className="mb-3 create-form__slider">
          <Form.Label htmlFor="meaning">Meaning</Form.Label>
          <Form.Label className="create-form__sublabel">
            Feelings of hope, joy, love pride and gratitude
          </Form.Label>
          <RangeSlider
            id="meaning"
            value={formData.meaning}
            onChange={changeData}
            placeholder="Meaning"
            min={0}
            max={10}
          />
        </Form.Group>
        <Form.Group className="mb-3 create-form__slider">
          <Form.Label htmlFor="accomplishment">Accomplishment</Form.Label>
          <Form.Label className="create-form__sublabel">
            Feelings of hope, joy, love pride and gratitude
          </Form.Label>
          <RangeSlider
            id="accomplishment"
            value={formData.accomplishment}
            onChange={changeData}
            placeholder="Accomplishment"
            min={0}
            max={10}
          />
        </Form.Group>
        <Form.Group className="mb-3 create-form__file">
          <Form.Label>Add an image which best describes today</Form.Label>
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
            type="text"
            placeholder="Comments"
            id="commentary"
            value={formData.commentary}
            onChange={changeData}
          />
        </Form.Group>
        <section className="container text-center">
          <Button variant="primary" type="submit">
            Create
          </Button>
          <Button variant="secondary" type="button" onClick={navigateToHome}>
            Cancel
          </Button>
        </section>
      </Form>
    </CreateFormContainer>
  );
};

export default CreateForm;
