/*
 * @Author: ruiwen.huang 2437252087@qq.com
 * @Date: 2023-12-02 11:32:52
 * @LastEditors: ruiwen.huang 2437252087@qq.com
 * @LastEditTime: 2024-05-29 15:05:44
 * @FilePath: /react-template-admin-main/src/stores/login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Info = Record<string, any> | null;

interface LoginState {
  userInfo: Info;
  setUserInfo: (info: Info) => void;
}

const useLoginStore = create<LoginState>()(
// 你可以使用任何一种存储来持久化你 store 里的数据。（其他中间件在demo中有体现）
  persist(
    (set) => ({
      userInfo: null,
      setUserInfo: (info) => set(() => ({ userInfo: info })),
    }),
    {
      name: "userInfo",
    }
  )
);

export default useLoginStore;
