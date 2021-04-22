import React, { useState } from "react";
import List from "./List";
import QuillEditor from "./QuillEditor";
import firebaseApp from "../src/config/firebase";
import "firebase/storage";
import "firebase/firestore";

const Post = (props) => {
	const storageRef = firebaseApp.storage();
	const db = firebaseApp.firestore();

	const [content, setContent] = useState(props.data);
	const [uploadedURL, setUploadedURL] = useState({
		url: [],
		fileName: [],
	});

	// 3SyfXGXIfc35Jrdu2FlV

	// useState(() => {
	// 	const fetchData = async () => {
	// 		await db
	// 			.collection("Articles")
	// 			.doc("3SyfXGXIfc35Jrdu2FlV")
	// 			.get()
	// 			.then((docRef) => {
	// 				console.log(docRef.data().content);
	// 				// setHistory(docRef.data().content);
	// 				// setContent(docRef.data().content);
	// 				// setContent(docRef.data().content);
	// 			})
	// 			.catch((error) => {
	// 				console.log(error);
	// 			});
	// 	};
	// 	fetchData();
	// }, []);

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

	const onUpdateSubmit = async () => {
		const submitData = {
			//implement this!
			content,
			createDate: new Date(),
			isPublished: false,
			CreateUserID: "userIDwillGenerateSoon",
			lastModified: new Date(),
		};
		await filterImage(submitData);
		await db
			.collection("Articles")
			.doc(props.dataID)
			.set(submitData)
			.then((docRef) => {
				console.log(docRef);
			})
			.catch((error) => {
				console.log(error);
			});
		console.log(submitData);
	};

	return (
		<div style={{ width: 500, margin: "auto" }}>
			<h1>update post</h1>

			<QuillEditor
				content={content}
				onEditorChange={onEditorChange}
				listUpdatedURL={listUpdatedURL}
				listFileName={listFileName}
			/>

			<button onClick={onUpdateSubmit}>Update !!!submit</button>

			<List />
		</div>
	);
};

export default Post;
