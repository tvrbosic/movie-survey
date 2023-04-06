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
  questionType: 'text' | 'rating';
  label: string;
  required: boolean;
  attributes?: {
    min: number;
    max: number;
  };
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

export interface ISurveyForm {
  [key: string]: string | number | boolean;
}
