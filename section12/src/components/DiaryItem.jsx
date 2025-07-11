import "./DiaryItem.css";
import { getEmotionImage } from "../util/getEmotionImage";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();
  const goDiaryPage = () => {
    nav(`/diary/${id}`);
  };
  const goEditPage = () => {
    nav(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <section className="img_section">
        <img src={getEmotionImage(emotionId)} onClick={goDiaryPage} />
      </section>
      <section className="info_section" onClick={goDiaryPage}>
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </section>
      <section className="button_section">
        <Button text={"수정하기"} onClick={goEditPage} />
      </section>
    </div>
  );
};
export default DiaryItem;
