import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Post from "./Post";
const data = `<p class="ql-align-center">fasfa</p><p class="ql-align-center"><img src="https://firebasestorage.googleapis.com/v0/b/quilleditor-7f317.appspot.com/o/Articles%2Fe996cbac-19a7-4717-8f26-ef048735d866?alt=media&amp;token=79618460-288c-43f5-b4b1-c0ad1e9bef7e" style="cursor: nwse-resize;" width="40"></p><p class="ql-align-center">fasfaaffa</p>`;
const dataID = "3SyfXGXIfc35Jrdu2FlV";
ReactDOM.render(
	<React.StrictMode>
		{/* <App /> */}
		<Post data={data} dataID={dataID} />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
