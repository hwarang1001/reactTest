function Button({ text, color = "red", children }) {
  // 이벤트 처리 핸들러 함수
  const onClickButton = (e) => {
    console.log(e);
    alert(`text = ${text} color = ${color} children = ${children}`);
  };
  return (
    <>
      <button
        name="khr"
        type="button"
        style={{ color: color }}
        onClick={onClickButton}
      >
        {text} - {text.toUpperCase()}
        {children}
      </button>
    </>
  );
}
export default Button;
