import axios from "axios";

export const addProjectTask = (projectTask, history) => async dispatch => {
  await axios.post("http://localhost:8080/api/board", projectTask);
  history.push("/");
};
