import "./ExerciseCard.css";

const ExerciseCard = ({ exercises }: any) => {
  return (
    <>
      {exercises &&
        Array.isArray(exercises) &&
        exercises.map((exercise: any, index: number) => {
          const { name, arrangeMuscles, img } = exercise;

          if (!Array.isArray(arrangeMuscles.secondary)) {
            arrangeMuscles.secondary = [];
          }

          return (
            <article className="container-exercise-card" key={index}>
              <div className="img-exercise-card">
                <img src={img} alt="exercise" />
              </div>
              <div className="information-exercise-card">
                <div className="parts-exercise-card">
                  <span className="part-exercise-card">
                    {arrangeMuscles.main}
                  </span>
                  {arrangeMuscles.secondary.map(
                    (muscle: any, index: number) => {
                      return (
                        <span className="part-exercise-card" key={index}>
                          {muscle}
                        </span>
                      );
                    }
                  )}
                </div>
                <h2>{name}</h2>
                <div className="underline-exercise-card"></div>
              </div>
            </article>
          );
        })}
    </>
  );
};

export default ExerciseCard;
