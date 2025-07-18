import "./EmotionItem.css";
import { getEmotionImage } from "../util/getEmotionImage";

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      className={`EmotionItem ${isSelected ? `EmotionItem_on_select` : ""}`}
      onClick={onClick}
    >
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
