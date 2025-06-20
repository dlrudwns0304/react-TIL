import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';

createRoot(document.getElementById('wrap')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/* main.jsx 파일은 index.html에 최종 여녏나느 렌더일 import시작해서 추가 컴포넌트들로 */