import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/MemberApi";
import { setCookie, getCookie, removeCookie } from "../util/cookieUtil";

const initState = {
  email: "",
};

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
  return loginPost(param);
});
const loadMemberCookie = () => {
  const memberInfo = getCookie("member");
  // 닉네임 처리
  if (memberInfo && memberInfo.nicname) {
    memberInfo.nicname = decodeURIComponent(memberInfo.nicname);
  }
  return memberInfo;
};
const loginSlice = createSlice({
  name: "LoginSlice",
  initialState: loadMemberCookie() || initState,
  reducers: {
    login: (state, action) => {
      console.log("로그인 .................. ");
      //{email, pw 로 구성 }
      const data = action.payload;
      //새로운 상태
      return { email: data.email };
    },
    logout: (state, action) => {
      console.log("로그아웃 ............... ");
      removeCookie("member");
      return { ...initState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fulfilled : 완료");
        const payload = action.payload;
        // 로그인시 쿠키 저장
        if (!payload.error) {
          console.log("쿠키에 저장");
          setCookie("member", JSON.stringify(payload), 1);
        }
        return payload;
      })
      .addCase(loginPostAsync.pending, (state, action) => {
        console.log("pending : 처리중");
      })
      .addCase(loginPostAsync.rejected, (state, action) => {
        console.log("rejected : 오류");
      });
  },
});
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
