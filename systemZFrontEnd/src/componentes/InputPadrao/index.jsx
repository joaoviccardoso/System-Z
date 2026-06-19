import { InputContainer, StyledInput } from "./styles";

export function Input({ label, ...rest }) {
  return (
    <InputContainer>
      {label && <label>{label}</label>}
      <StyledInput {...rest} />
    </InputContainer>
  );
}