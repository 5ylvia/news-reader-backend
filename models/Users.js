const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            lowercase: true,
            // unique: true,
            required: [true, "email address is required"],
            match: [ /\s+@\s+\.\s+/, "not a valid email adress"],
            // index: true
        },
    },
    { timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);
