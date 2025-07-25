import jwtAxios from "../util/JWTUtil";
import { API_SERVER_HOST } from "./TodoApi";

// 서버주소 및 공통주소
const prefix = `${API_SERVER_HOST}/api/products`;

// 선택
export const getOne = async (tno) => {
  const res = await jwtAxios.get(`${prefix}/${tno}`);
  return res.data;
};

// 삽입
export const postAdd = async (product) => {
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  const result = await jwtAxios.post(`${prefix}/`, product, header);
  return result.data;
};
// 삭제
export const deleteOne = async (pno) => {
  const res = await jwtAxios.delete(`${prefix}/${pno}`);
  return res.data;
};

// 수정
export const putOne = async (pno, product) => {
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  const res = await jwtAxios.put(`${prefix}/${pno}`, product, header);
  return res.data;
};

// 페이징 리스트
export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const result = await jwtAxios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });
  return result.data;
};
