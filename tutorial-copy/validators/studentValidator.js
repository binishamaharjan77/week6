// validators/studentValidator.js
import { body, param } from "express-validator";

export const createStudentValidator = [
  body("name")
    .trim()
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 2 }).withMessage("Name must be at least 2 characters"),

  body("course")
    .trim()
    .notEmpty().withMessage("Course is required"),
];

export const updateStudentValidator = [
  param("id").isInt().withMessage("id must be an integer").toInt(),

  body("name")
    .optional()
    .trim()
    .notEmpty().withMessage("Name must not be empty"),

  body("course")
    .optional()
    .trim()
    .notEmpty().withMessage("Course must not be empty"),
];

export const idParamValidator = [
  param("id").isInt().withMessage("id must be an integer").toInt(),
];