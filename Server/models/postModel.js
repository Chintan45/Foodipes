const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TimeSchema = Schema({
  cookTime: { type: String, required: true },
  prepTime: { type: String, required: true },
  totalTime: { type: String, required: true },
})

const RecipeSchema = new Schema({
    title: { type: String, required: true },
    time: { type: TimeSchema, required: true },
    serving: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: { type: [String], required: true },
    garnish: { type: [String], default: [] },
    instructions: { type: [String], required: true },
    notes: { type: [String], default: [] },
    toppings: { type: [String], default: [] }
})

const PostSchema = new Schema({
  pizza: { type: RecipeSchema },
  pasta: { type: RecipeSchema },
  cupcake: { type: RecipeSchema },
}, { timestamps: true });

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;
