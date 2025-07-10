import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import NotFound from "./pages/Notfound";
import { getEmotionImage } from "./util/get-emotion-image";
function App() {
  const nav = useNavigate();
  const onClickHome = () => {
    nav("/");
  };
  const onClickNew = () => {
    nav("/new");
  };
  const onClickDiary = () => {
    nav("/diary");
  };
  const onClickEdit = () => {
    nav("/edit");
  };
  return (
    <>
      <div className="App">
        <Link to={"/"}>HOME</Link>
        <Link to={"/new"}>NEW</Link>
        <Link to={"/diary/2"}>DIARY</Link>
        <Link to={"/edit/3"}>EDIT</Link>
      </div>
      <div className="App">
        <button onClick={onClickHome}>HOME</button>
        <button onClick={onClickNew}>NEW</button>
        <button onClick={onClickDiary}>DIARY</button>
        <button onClick={onClickEdit}>EDIT</button>
      </div>
      <div className="App">
        <img src={"/emotion11.png"} />
        <img src={"/emotion12.png"} />
        <img src={"/emotion13.png"} />
        <img src={"/emotion14.png"} />
        <img src={"/emotion15.png"} />
      </div>
      <div className="App">
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new/*" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div>
        <h1>Footer</h1>
      </div>
    </>
  );
}

export default App;
