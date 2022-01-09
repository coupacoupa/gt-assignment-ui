export interface ISubmissionStatus extends ISubmissionForm {
  submissionNo: number;
  feedbackStatus: string;
  createdDate: string;
}

export interface ISubmissionForm {
  name: string;
  email: string;
  contactNumber: string;
  agencyName: string;
  feedback: string;
}
