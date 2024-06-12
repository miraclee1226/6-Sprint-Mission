import * as S from "./Styles/AddItemPageStyles";

interface InputFormProps {
  name: string;
  label: string;
  value?: string | null;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function InputForm({ name, label, placeholder, onChange, onKeyUp }: InputFormProps) {
  return (
    <div>
      <S.Title>{label}</S.Title>
      <S.Input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </div>
  );
}

export default InputForm;
