import axios from "axios";

// 서버주소 및 공통주소
export const API_SERVER_HOST = "http://localhost:8080";
const prefix = `${API_SERVER_HOST}/api/todo`;

// 선택
export const getOne = async (tno) => {
  const result = await axios.get(`${prefix}/${tno}`);
  return result.data;
};
// 페이징 리스트
export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const result = await axios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });
  return result.data;
};
// 삽입
export const postAdd = async (todo) => {
  const result = await axios.post(`${prefix}/`, todo);
  return result.data;
};
// 수정

// 삭제
