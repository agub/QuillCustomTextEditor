import React, { useState } from "react";
import List from "./List";
import QuillEditor from "./QuillEditor";
import firebaseApp from "../src/config/firebase";
import "firebase/storage";
import "firebase/firestore";

const App = () => {
	const storageRef = firebaseApp.storage();
	const db = firebaseApp.firestore();
	const [content, setContent] = useState("");
	const [uploadedURL, setUploadedURL] = useState({
		url: [],
		fileName: [],
	});

	const onEditorChange = (value) => {
		setContent(value);
	};

	const listUpdatedURL = async (url) => {
		await setUploadedURL({
			...uploadedURL,
			url: [...uploadedURL.url, url],
		});
	};
	const listFileName = async (name) => {
		await setUploadedURL({
			...uploadedURL,
			fileName: [...uploadedURL.fileName, name],
		});
	};

	const filterImage = async (submitData) =>
		await uploadedURL.url.forEach((e, index) => {
			if (!submitData.content.includes(e)) {
				console.log("not included");
				storageRef
					.ref()
					.child("Articles/" + uploadedURL.fileName[index])
					.delete();
				return;
			}
		});

	const onSubmit = async () => {
		const submitData = {
			content,
			createDate: new Date(),
			isPublished: false,
			CreateUserID: "userIDwillGenerateSoon",
			lastModified: new Date(),
		};
		await filterImage(submitData);
		// console.log(db.collection("Articles"));
		await db
			.collection("Articles")
			.add(submitData)
			.then((docRef) => {
				console.log(docRef);
			})
			.catch((error) => {
				console.log(error);
			});
		console.log(submitData);
	};

	return (
		<div style={{ width: 500, height: 300 }}>
			<h1>new post</h1>
			<QuillEditor
				content={content}
				onEditorChange={onEditorChange}
				listUpdatedURL={listUpdatedURL}
				listFileName={listFileName}
			/>
			<button onClick={onSubmit}>submit</button>

			<List />
		</div>
	);
};

export default App;
