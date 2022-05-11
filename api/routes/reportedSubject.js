const router = require("express").Router();
const reportedSubject = require("../controller/reportedSubjectController");

// ADD A REPORTED_SUBJECT
router.post("/", reportedSubject.addReportedSubject);

//GET ALL REPORTED_SUBJECT
router.get("/", reportedSubject.getReportedSubjects);

//GET A REPORTED_SUBJECT
router.get("/:id", reportedSubject.getReportedSubject);

module.exports = router;
