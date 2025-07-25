import jwtAxios from "../util/JWTUtil";

// 서버주소 및 공통주소
export const API_SERVER_HOST = "http://localhost:8080";
const prefix = `${API_SERVER_HOST}/api/todo`;

// 선택
export const getOne = async (tno) => {
  const result = await jwtAxios.get(`${prefix}/${tno}`);
  return result.data;
};
// 페이징 리스트
export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const result = await jwtAxios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });
  return result.data;
};
// 삽입
export const postAdd = async (todo) => {
  const result = await jwtAxios.post(`${prefix}/`, todo);
  return result.data;
};
// 수정
export const putOne = async (todo) => {
  const result = await jwtAxios.put(`${prefix}/${todo.tno}`, todo);
  return result.data;
};
// 삭제
export const deleteOne = async (tno) => {
  const result = await jwtAxios.delete(`${prefix}/${tno}`);
  return result.data;
};
