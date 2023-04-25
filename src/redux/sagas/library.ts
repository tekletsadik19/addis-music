import { all, put, takeLatest } from "redux-saga/effects";
import * as t from "@/redux/types";

function* fetchLibrarys() {
	try {
		const response = yield fetch("/api/librarys");

		const libraryList = yield response.json();

		yield put({
			type: t.LIBRARY_FETCH_SUCCEEDED,
			payload: libraryList.data,
		});
	} catch (error) {
		yield put({
			type: t.LIBRARY_FETCH_FAILED,
			payload: error.message,
		});
	}
}

function* watchFetchLibrarys() {
	yield takeLatest(t.LIBRARY_FETCH_REQUESTED, fetchLibrarys);
}

function* addLibrary(action) {
	
	try {
		const response = yield fetch("/api/librarys", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(action.payload),
		});

		const newLibrary = yield response.json();

		yield put({
			type: t.LIBRARY_ADD_SUCCEEDED,
			payload: newLibrary.data,
		});
	} catch (error) {
		yield put({
			type: t.LIBRARY_ADD_FAILED,
			payload: error.message,
		});
	}
}

function* watchAddLibrary() {
	yield takeLatest(t.LIBRARY_ADD_REQUESTED, addLibrary);
}

function* deleteLibrary(action) {
	try {
		const response = yield fetch("/api/librarys/" + action.payload, {
			method: "DELETE",
		});

		const deletedLibrary = yield response.json();

		yield put({
			type: t.LIBRARY_DELETE_SUCCEEDED,
			payload: deletedLibrary.data.id,
		});
	} catch (error) {
		yield put({
			type: t.LIBRARY_DELETE_FAILED,
			payload: error.message,
		});
	}
}

function* watchRemoveLibrary() {
	yield takeLatest(t.LIBRARY_DELETE_REQUESTED, deleteLibrary);
}

function* updateLibrary(action) {
	try {
		const response = yield fetch("/api/librarys/" + action.payload._id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(action.payload),
		});

		const updatedLibrary = yield response.json();

		yield put({
			type: t.LIBRARY_UPDATE_SUCCEEDED,
			payload: updatedLibrary.data,
		});
	} catch (error) {
		yield put({
			type: t.LIBRARY_UPDATE_FAILED,
			payload: error.message,
		});
	}
}

function* watchUpdateLibrary() {
	yield takeLatest(t.LIBRARY_UPDATE_REQUESTED, updateLibrary);
}

export default function* rootSaga() {
	yield all([
		watchFetchLibrarys(),
		watchAddLibrary(),
		watchRemoveLibrary(),
		watchUpdateLibrary(),
	]);
}