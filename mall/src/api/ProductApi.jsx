import axios from "axios";
import { API_SERVER_HOST } from "./todoApi";
// 서버주소 및 공통주소
const prefix = `${API_SERVER_HOST}/api/products`;

// 선택
export const getOne = async (tno) => {
  const res = await axios.get(`${prefix}/${tno}`);
  return res.data;
};

// 삽입
export const postAdd = async (product) => {
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  const result = await axios.post(`${prefix}/`, product, header);
  return result.data;
};
// 삭제
export const deleteOne = async (pno) => {
  const res = await axios.delete(`${prefix}/${pno}`);
  return res.data;
};

// 수정
export const putOne = async (pno, product) => {
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  const res = await axios.put(`${prefix}/${pno}`, product, header);
  return res.data;
};

// 페이징 리스트
export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const result = await axios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });
  return result.data;
};
