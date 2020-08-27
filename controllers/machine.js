const catchAsync = require('../errors/catchAsync');

// prettier-ignore
const createOne = Model => catchAsync(async (req, res) => {
  const document = await Model.create({ ...req.body, user: req.user._id });

  const response = { status: 'success' };

  response[Model.collection.name.slice(0, -1)] = document;

  res.status(201).json(response);
});

// prettier-ignore
const getAll = Model => catchAsync(async (req, res) => {
  const documents = await Model.find();

  const response = { status: 'success' };

  response[Model.collection.name] = documents;

  res.status(200).json(response);
});

module.exports = { createOne, getAll };
