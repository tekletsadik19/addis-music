import * as t from "@/redux/types";

const initialState = {
	libraryList: [],
	selectedLibrary: undefined,
	isModalOpen: false,
};

const libraryReducer = (state = initialState, action) => {
	switch (action.type) {
		case t.MODAL_OPEN:
			return {
				...state,
				isModalOpen: action.payload,
			};
		case t.LIBRARY_FETCH_SUCCEEDED:
			return {
				...state,
				libraryList: action.payload,
			};
		case t.LIBRARY_ADD_SUCCEEDED:
			return {
				...state,
				libraryList: [action.payload, ...state.libraryList],
			};
		case t.LIBRARY_UPDATE_SUCCEEDED:
			const updatedLibrary = state.libraryList.map((library) => {
				if (library._id === action.payload._id) {
					return {
						...library,
						name: action.payload.name,
						email: action.payload.email,
						address: action.payload.address,
						phone: action.payload.phone,
					};
				}
				return library;
			});

			return { ...state, libraryList: updatedLibrary };
		case t.LIBRARY_DELETE_SUCCEEDED:
			const newLibraryList = state.libraryList.filter(
				(library) => library._id !== action.payload
			);
			return {
				...state,
				libraryList: newLibraryList,
			};
		case t.LIBRARY_SELECTED:
			const selectedLibrary = state.libraryList.find(
				(library) => library._id === action.payload
			);
			return {
				...state,
				selectedLibrary,
			};
		default:
			return state;
	}
};

export default libraryReducer;

