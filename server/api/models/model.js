const mongoose = require("mongoose");

//Định nghĩa một cài đặt
const settingSchema = new mongoose.Schema({
  idSet: {
    type: String,
    required: true,
    unique: true,
  },
  nameSet: {
    type: String,
    required: true,
    unique: true,
  },
  valueSet: {
    type: Number,
    required: true,
  },
});

//Định nghĩa một học sinh
const studentSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfBirth: String,
  address: String,
  gender: String,
  cClass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CClass",
  },
  // subjects: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Subject",
  //   },
  // ],
});

//Định nghĩa một khối
const gradeSchema = new mongoose.Schema({
  gradeName: {
    type: Number,
    required: true,
    unique: true,
  },
  cClasses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CClass",
    },
  ],
});

//Định nghĩa một lớp học
const cClassSchema = new mongoose.Schema({
  nameClass: {
    type: String,
    required: true,
    unique: true,
  },
  grade: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Grade",
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  term: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Term",
  },
  schoolYears: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SchoolYear",
  },
});

//danh sách các lớp học - Note: Tân thêm
const cClassListSchema = new mongoose.Schema({
  idClass: {
    type: String,
    required: true,
    unique: true,
  },
  nameClass: {
    type: String,
    required: true,
    unique: true,
  },
});

//Định nghĩa một môn học
const subjectSchema = new mongoose.Schema({
  idSubject: {
    type: String,
    required: true,
    unique: true,
  },
  nameSubject: {
    type: String,
    required: true,
    unique: true,
  },

  // students: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Student",
  //   },
  // ],
});

//Điểm 1 môn học: Bao gồm: Tên môt môn học, trong môn học này sẽ thống kê cho toàn bộ các lớp, tham chiếu đến một môn học, và các điểm, hệ số môn học
const scoreSubjectSchema = new mongoose.Schema({
  cClasses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CClass",
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
  },
  fifMinutesScore: Number, // 15 minutes score
  aLessonScore: Number, // a lesson score
  finalScore: Number,
  // final score
  mediumScore: Number, // medium score
  coEffect: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoEffect",
  },
});

//Chi tiết điểm - Note: Tân thêm
const scoreDetailSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  cClass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CClass",
  },
  score: {
    type: Number,
    required: true,
  },
  coEffect: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoEffect",
  },
});

//Hệ số môn học
const coEffectSchema = new mongoose.Schema({
  // subject: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Subject",
  // },
  // co15min: {
  //   type: Number,
  //   required: true,
  //   unique: true,
  // },
  // co45min: {
  //   type: Number,
  //   required: true,
  //   unique: true,
  // },
  // coFinal: {
  //   type: Number,
  //   required: true,
  //   unique: true,
  // },
  nameCoEff: {
    type: String,
    required: true,
    unique: true,
  },
  Value: {
    type: Number,
    required: true,
    unique: true,
  },
});

//Định nghĩa học kỳ
const termSchema = new mongoose.Schema({
  nameTerm: {
    type: String,
    required: true,
    unique: true,
  },
  // cClasses: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "CClass",
  //   },
  // ],
});

//Định nghĩa năm học
const schoolYearSchema = new mongoose.Schema({
  nameSchYear: {
    type: String,
    required: true,
    unique: true,
  },
});

//Dữ liệu chứa báo cáo một môn học
const reportedSubjectSchema = new mongoose.Schema({
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
  },
  // grade: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Grade",
  // },
  cClass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CClass",
  },
  totalStudents: {
    type: Number,
  },
  passed: {
    type: Number,
  },
  rate: {
    type: Number,
  },
  term: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Term",
  },
  schoolYear: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SchoolYear",
  },
});

//Dữ liệu chứa báo cáo một học kỳ
const reportedTermSchema = new mongoose.Schema({
  cClass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CClass",
  },
  term: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Term",
  },
  schoolYears: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "schoolYear",
  },
  totalStudents: {
    type: Number,
  },
  passed: {
    type: Number,
  },
  rate: {
    type: Number,
  },
});

let Setting = mongoose.model("Setting", settingSchema);
let Student = mongoose.model("Student", studentSchema);
let Grade = mongoose.model("Grade", gradeSchema);
let CClass = mongoose.model("CClass", cClassSchema);

//Tân đề xuất CClassList
let CClassList = mongoose.model("CClassList", cClassListSchema);

let Subject = mongoose.model("Subject", subjectSchema);

//Tân đề xuất ScoreDetail
let ScoreDetail = mongoose.model("ScoreDetailSchema", scoreDetailSchema);

let ScoreSubject = mongoose.model("ScoreSubjectSchema", scoreSubjectSchema);
let CoEffect = mongoose.model("CoEffectSchema", coEffectSchema);
let Term = mongoose.model("Term", termSchema);
let SchoolYear = mongoose.model("SchoolYear", schoolYearSchema);
let ReportedSubject = mongoose.model("ReportedSubject", reportedSubjectSchema);
let ReportedTerm = mongoose.model("ReportedTerm", reportedTermSchema);
// let ScoreSubject = mongoose.model("ScoreSubjectSchema", scoreSubjectSchema);

module.exports = {
  Setting,
  Student,
  Grade,
  CClass,
  CClassList,
  Subject,
  ScoreDetail,
  ScoreSubject,
  CoEffect,
  Term,
  SchoolYear,
  ReportedSubject,
  ReportedTerm,
};
