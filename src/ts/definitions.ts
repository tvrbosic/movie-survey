export interface IContainerPaddings {
  x: {
    [key: string]: string;
  };
  y: {
    [key: string]: string;
  };
}

export interface ISurveyQuestion {
  questionId: string;
  questionType: string;
  label: string;
  required: boolean;
  attributes: Object;
}

export interface ISurvey {
  data: {
    attributes: {
      title: string;
      description: string;
      questions: ISurveyQuestion[];
    };
  };
}
