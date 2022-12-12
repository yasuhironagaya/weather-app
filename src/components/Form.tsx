// Form.tsx

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FocusEvent<HTMLFormElement>) => void;
};

const Form = (props: FormPropsType) => {
  return (
    <form onSubmit={props.getWeather}>
      <input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={(e) => props.setCity(e.target.value)}
      />
    </form>
  );
};

export default Form;
