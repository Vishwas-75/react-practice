import { Button, Paper} from "@mui/material";
import Question from "../Question";

function Quiz() {
  return (
    <div>
      <Paper>
      <Question/>
      <Button> {"<"} </Button>
      <Button>{">"}</Button>
      </Paper>

     
    </div>
  );
}

export default Quiz;
