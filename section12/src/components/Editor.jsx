import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];
//날짜를 문자열로 리턴하는 함수
const getStringedDate = (targetDate) => {
  // yyyy-mm-dd
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

const Editor = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });
  const nav = useNavigate();
  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);
  //데이터 수정
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    //날짜를 수정한다면 날짜로 변경
    if (name === "createdDate") {
      value = new Date(value);
    }
    setInput({
      ...input,
      [name]: value,
    });
  };

  //데이터 전송
  const onSubmitButtonClick = () => {
    onSubmit(input);
  };
  return (
    <>
      <div className="Editor">
        <section className="date_section">
          <h4>오늘의 날짜</h4>
          <input
            name="createdDate"
            value={getStringedDate(input.createdDate)}
            type="date"
            onChange={onChangeInput}
          />
        </section>
        <section className="emotion_section">
          <h4>오늘의 감정</h4>
          <div className="emotion_list_wrapper">
            {emotionList.map((item) => (
              <EmotionItem
                onClick={() => {
                  onChangeInput({
                    target: { name: "emotionId", value: item.emotionId },
                  });
                }}
                key={item.emotionId}
                {...item}
                isSelected={item.emotionId === input.emotionId}
              />
            ))}
          </div>
        </section>
        <section className="content_section">
          <h4>오늘의 일기</h4>
          <textarea
            name="content"
            value={input.content}
            placeholder="오늘은 어땠나요?"
            onChange={onChangeInput}
          />
        </section>
        <section className="button_section">
          <Button
            text={"취소하기"}
            onClick={() => {
              nav(-1);
            }}
          />
          <Button
            text={"작성완료"}
            type={"POSITIVE"}
            onClick={onSubmitButtonClick}
          />
        </section>
      </div>
    </>
  );
};
export default Editor;
