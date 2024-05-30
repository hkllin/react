/*
 * @Author: ruiwen.huang 2437252087@qq.com
 * @Date: 2024-05-30 09:13:04
 * @LastEditors: ruiwen.huang 2437252087@qq.com
 * @LastEditTime: 2024-05-30 09:52:04
 * @FilePath: /my-react-app/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
export default defineConfig({
  resolve: {
    alias: {
      "@pages": resolve(__dirname, "src", "pages"),
      "@components": resolve(__dirname, "src", "components"),
      "@stores": resolve(__dirname, "src", "stores"),
      "@services": resolve(__dirname, "src", "services"),
      "@utils": resolve(__dirname, "src", "utils"),
    },
  },
  plugins: [react()],
});
