export default function Checkbox({ text, isChecked }) {

  return (
    <>
      <div>
        {text}
        {isChecked ? ' is done' : ' is in progress'}
      </div>
    </>
    );
}
