import { CatalogueNewExerciseFormValues } from "src/model/Forms.model";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import ChooseTheBodyPart from "src/components/Forms/AddNewCatalogueExercise/ChooseTheBodyPart";
import ExerciseTips from "./ExerciseTips";
import SecondaryArrangeMuscles from "./SecondaryArrangeMuscles";
import SelectPicture from "./SelectPicture";
import ExerciseName from "./ExerciseName";
import "./AddNewCatalogueExercise.css";

const AddNewCatalogueExercise = () => {
  const methods = useForm<CatalogueNewExerciseFormValues>();

  const onSubmit: SubmitHandler<CatalogueNewExerciseFormValues> = (data) => {
    console.log(data);
  };

  return (
    <article className="container-add-new-catalogue">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="row-add-new-catalogue">
            <section className="col-add-new-catalogue">
              <ChooseTheBodyPart />
              <SecondaryArrangeMuscles />
            </section>
            <section className="col-add-new-catalogue">
              <div className="field-add-new-catalogue">
                <ExerciseName />
                <ExerciseTips />
              </div>
              <SelectPicture />
            </section>
          </div>
          <div className="row-add-new-catalogue">
            <button className="btn-add-new-catalogue">ADD</button>
          </div>
        </form>
      </FormProvider>
    </article>
  );
};

export default AddNewCatalogueExercise;
