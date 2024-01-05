import React from "react";
import { App } from "../App";
import { hydrateRoot } from "react-dom/client";

// ハイドレーションを行う
// React 18 での新しい機能を使用するコード
const ssr = document.getElementById("ssr") as HTMLElement;
hydrateRoot(ssr, <App />);
