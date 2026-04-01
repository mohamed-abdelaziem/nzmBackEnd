import { asyncHandler } from "../utils/asyncHandler.js";
import { sendContactEmail } from "../services/mailService.js";

export const sendContactForm = asyncHandler(async (req, res) => {
  const { name, email, phone, message ,projectType} = req.body;

  if (!name || !email || !message || !projectType) {
    return res.status(400).json({
      success: false,
      message: "name, email, and message are required",
    });
  }

  await sendContactEmail({ name, email, phone, message , projectType });

  res.status(200).json({
    success: true,
    message: "Message sent successfully",
  });
});