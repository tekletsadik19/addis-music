import * as t from "@/redux/types";

export const setModalOpen = (isModalOpen) => {
	return {
		type: t.MODAL_OPEN,
		payload: isModalOpen,
	};
};

export const fetchLibrarys = () => {
	return {
		type: t.LIBRARY_FETCH_REQUESTED,
	};
};

export const addLibrary = (library) => {
	return {
		type: t.LIBRARY_ADD_REQUESTED,
		payload: library,
	};
};

export const updateLibrary = (library) => {
	return {
		type: t.LIBRARY_UPDATE_REQUESTED,
		payload: library,
	};
};

export const deleteLibrary = (id) => {
	return {
		type: t.LIBRARY_DELETE_REQUESTED,
		payload: id,
	};
};

export const setSelectedLibrary = (id) => {
	return {
		type: t.LIBRARY_SELECTED,
		payload: id,
	};
};