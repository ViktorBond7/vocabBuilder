import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../redax/tasks/operations";
import { selectTasks } from "../../redax/tasks/selektors";

const TrainingPage = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(selectTasks);
  // const loading = useSelector(selectTasksLoading);
  // const error = useSelector(selectTasksError);

  console.log("tasks", tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return <h1>TrainingPage</h1>;
};

export default TrainingPage;
