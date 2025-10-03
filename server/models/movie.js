import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
    {
        _id :{ type: String ,required: true},
        title :{ type: String ,required: true},
        overview:{ type: String ,required: true},
        poster_path :{ type: String ,required: true},
        backdrop_path:{ type: String ,required: true},
        release_date :{ type: String ,required: true},
        original_language:{ type: String },
        tagline:{ type: String },
        genres:{ type: Array ,requied :true},
        casts:{ type: Array ,requied :true},
        vote_average:{ type: Number ,requied :true},
        runtime:{ type: Number,requied :true},
    }
)