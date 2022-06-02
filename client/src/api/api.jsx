import axiosClient from "./axiosClient";

export const api = {
  //GET
  getAStudentInfoArr: (ID, params) => {
    const url = "student/" + ID;
    return axiosClient.get(url, params);
  },
  getStudentInfoArr: (params) => {
    const url = "student";
    return axiosClient.get(url, params);
  },
  getClassListArr: (params) => {
    const url = "classList";
    return axiosClient.get(url, params);
  },
  //   getStudentScoreArr: (params) => {
  //     const url = "score";
  //     return axiosClient.get(url, params);
  //   },
  getReportSubjects: (params) => {
    const url = "reportedSubjects";
    return axiosClient.get(url, params);
  },
  getReportTerm: (params) => {
    const url = "reportedTerms";
    return axiosClient.get(url, params);
  },
  getSettingList: (params) => {
    const url = "setting";
    return axiosClient.get(url, params);
  },
  //   getClassArr: (params) => {
  //     const url = "student";
  //     return axiosClient.get(url, params);
  //   },
  getSubjectList: (params) => {
    const url = "subject";
    return axiosClient.get(url, params);
  },
  getTermList: (params) => {
    const url = "term";
    return axiosClient.get(url, params);
  },
  getSchoolYearList: (params) => {
    const url = "schoolYear";
    return axiosClient.get(url, params);
  },
  getGradeList: (params) => {
    const url = "grade";
    return axiosClient.get(url, params);
  },
  getCCLASS: (params) => {
    const url = "class";
    return axiosClient.get(url, params);
  },
  getScoreSchoolYear: (params) => {
    const url = "scoreSchoolYear";
    return axiosClient.get(url, params);
  },

  //POST******************************************************
  postNewStudentInfo: (payload) => {
    const url = "student";
    return axiosClient.post(url, payload);
  },
  postNewClassList: (payload) => {
    const url = "class";
    return axiosClient.post(url, payload);
  },
  //   postStudentScore: (payload) => {
  //     const url = "score";
  //     return axiosClient.post(url, payload);
  //   },
  //   postClassArr: (payload) => {
  //     const url = "student";
  //     return axiosClient.post(url, payload);
  //   },
  postSubjectList: (payload) => {
    const url = "subject";
    return axiosClient.post(url, payload);
  },
  postClassList: (payload) => {
    const url = "classList";
    return axiosClient.post(url, payload);
  },
  postClassWithStudents: (payload) => {
    const url = "class";
    return axiosClient.post(url, payload);
  },

  //PUT***************************
  putSubjectList: (id, payload) => {
    const url = "subject/" + String(id);
    return axiosClient.put(url, payload);
  },
  putClassList: (id, payload) => {
    const url = "classList/" + String(id);
    return axiosClient.put(url, payload);
  },
  putSettingList: (id, payload) => {
    const url = "settings/" + String(id);
    return axiosClient.put(url, payload);
  },

  //DELETE*****************************
  deleteSubjectList: (id) => {
    const url = "subject/" + String(id);
    return axiosClient.delete(url);
  },
  deleteClassList: (id) => {
    const url = "classList/" + String(id);
    return axiosClient.delete(url);
  },
};
