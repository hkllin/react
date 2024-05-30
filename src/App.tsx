/*
 * @Author: ruiwen.huang 2437252087@qq.com
 * @Date: 2024-05-30 09:13:04
 * @LastEditors: ruiwen.huang 2437252087@qq.com
 * @LastEditTime: 2024-05-30 09:55:38
 * @FilePath: /my-react-app/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Suspense, lazy } from "react";
import { ConfigProvider, Spin } from "antd";
import './App.css'

export function authLoader() {
  return { isAdmin: true };
}
const App: React.FC = () => {
  return (
    <div>111</div>
  )
}

export default App
