const Contact = require("../models/contactModel.js");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.newContact = catchAsyncErrors(async (req, res, next) => {
	const {
		contactName,
		contactEmail,
		contactPhone,
		contactMessage } = req.body;
	res.json({
		success: true,
		message: "Your query was sent successfully",
		newContact
	});
});
