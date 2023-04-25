import mongoose from "mongoose";

const LibrarySchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Library Name is required!"],
		trim: true,
	},
	userId: {
		type: String,
		required: [true, "User Id is required!"],
		trim: true,
	},
	imageUrl: {
		type: String,
		required: [false, ""],
        trim: true,
	},
	trackId: {
		type: Array,
		required: [false, "Phone is required!"],
        default:[]
	},
	createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Library ||
	mongoose.model("Library", LibrarySchema);