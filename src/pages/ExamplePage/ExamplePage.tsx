import { useDispatch } from "react-redux";
import useSelector from "../../hooks/useSelector";
import { testAction } from "../../store/example/actions";
import { ReactComponent as TestIcon } from "../../assets/test.svg";

function ExamplePage() {
  const dispatch = useDispatch();

  const test = useSelector((state) => state.example.exampleA);

  const onClickHandler = () => {
    dispatch(testAction({ propA: "1", propB: 2 }));
  };

  return (
    <div>
      <h1>ExamplePage</h1>
      <div>test</div>
      <TestIcon />
      <button type="button" onClick={onClickHandler}>
        {test}
      </button>
    </div>
  );
}

export default ExamplePage;
