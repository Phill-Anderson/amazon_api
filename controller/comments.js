const Comment = require("../models/Comment");
const MyError = require("../utils/myError");
const asyncHandler = require("express-async-handler");
const paginate = require("../utils/paginate");
const User = require("../models/User");

exports.getComments = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const sort = req.query.sort;
  const select = req.query.select;

  ["select", "sort", "page", "limit"].forEach((el) => delete req.query[el]);

  const pagination = await paginate(page, limit, Comment);

  const comments = await Comment.find(req.query, select)
    .populate({
      path: "userId",
      select: "name",
    })
    .sort(sort)
    .skip(pagination.start - 1)
    .limit(limit);

  res.status(200).json({
    success: true,
    data: comments,
    pagination,
  });
});
exports.getComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    throw new MyError(req.params.id + " ID-тэй коммэнт байхгүй!", 400);
  }

  res.status(200).json({
    success: true,
    data: comment,
  });
});
exports.getUserComments = asyncHandler(async (req, res, next) => {
  req.query.userId = req.userId;
  return await this.getComments(req, res, next);
});
exports.createComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.create(req.body);

  res.status(200).json({
    success: true,
    data: comment,
  });
});

exports.updateComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!comment) {
    throw new MyError(req.params.id + " ID-тэй коммент байхгүй.", 400);
  }

  res.status(200).json({
    success: true,
    data: comment,
  });
});

exports.deleteComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    throw new MyError(req.params.id + " ID-тэй коммент байхгүй.", 400);
  }

  comment.remove();

  res.status(200).json({
    success: true,
    data: comment,
  });
});
