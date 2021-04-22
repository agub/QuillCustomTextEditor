import React from "react";
import parse from "html-react-parser";
function Article(props) {
	const data = parse(props.data.content);
	return (
		<div className='ql-editor' style={{ height: "auto" }}>
			<div style={{ width: "100%" }}>{data}</div>
		</div>
	);
}

export default Article;
