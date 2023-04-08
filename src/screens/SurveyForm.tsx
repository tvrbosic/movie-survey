import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';

import routes from 'router/routes';
import { useGetData } from 'hooks/useGetData';
import { usePostData } from 'hooks/usePostData';
import { ISurvey, ISurveyForm } from 'ts/definitions';
import FormHeader from 'components/survey/FormHeader';
import RatingControl from 'components/survey/RatingControl';
import HorizontalLine from 'components/HorizontalLine';
import SurveyLoading from 'components/survey/SurveyLoading';

export default function SurveyForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISurveyForm>();
  const { data, isError: isGetError, error: getError, sendGetRequest } = useGetData<ISurvey>();
  const { response, isError: isPostError, error: postError, sendPostRequest } = usePostData();
  const navigate = useNavigate();

  useEffect(() => {
    sendGetRequest('/api/v1/survey');
  }, [sendGetRequest]);

  useEffect(() => {
    if (response) {
      navigate(routes.success.path, { state: { response, success: true } });
    }
  }, [response, navigate]);

  useEffect(() => {
    if (isGetError || isPostError) {
      navigate(routes.error.path);
    }
  }, [isGetError, isPostError, getError, postError, navigate]);

  const submitData = (formData: any) => {
    sendPostRequest(`/api/v1/survey/${data?.data.id}/answers`, {
      data: {
        type: 'surveyAnswers',
        attributes: {
          answers: Object.entries(formData).map(([questionId, answer]) => ({
            questionId,
            answer,
          })),
        },
      },
    });
  };

  const renderContent = data && !isGetError;

  return (
    <>
      {renderContent ? (
        <form onSubmit={handleSubmit(submitData)}>
          <FormHeader
            title={data!.data.attributes.title}
            description={data!.data.attributes.description}
          />
          <HorizontalLine my="30px" />

          {data!.data.attributes.questions.map((question, index) => {
            switch (question.questionType) {
              case 'text':
                return (
                  <FormControl
                    key={question.questionId}
                    mb="20px"
                    isInvalid={!!errors[question.questionId]}
                  >
                    <FormLabel htmlFor={question.questionId} color="gray.600">
                      {question.label}
                    </FormLabel>
                    <Input
                      type="text"
                      variant="filled"
                      placeholder="Enter your answer"
                      {...register(question.questionId, {
                        required: {
                          value: question.required,
                          message: 'Answer to this question is required!',
                        },
                      })}
                    />
                    <FormErrorMessage minH={'1rem'}>
                      {errors[question.questionId] && errors[question.questionId]!.message}
                    </FormErrorMessage>
                  </FormControl>
                );
              case 'rating':
                return (
                  <FormControl key={index} mb="20px" isInvalid={!!errors[question.questionId]}>
                    <FormLabel htmlFor={question.questionId} color="gray.600">
                      {question.label}
                    </FormLabel>
                    <Controller
                      control={control}
                      name={question.questionId}
                      rules={{
                        required: { value: question.required, message: 'Rating field is required' },
                      }}
                      render={({ field }) => (
                        <RatingControl
                          key={index}
                          attributes={question.attributes!}
                          onValueChange={field.onChange}
                          validationError={!!errors[question.questionId]}
                        />
                      )}
                    />
                    <FormErrorMessage>
                      {errors[question.questionId] && errors[question.questionId]!.message}
                    </FormErrorMessage>
                  </FormControl>
                );
              default:
                return null;
            }
          })}

          <HorizontalLine my="30px" />
          <ButtonGroup w="100%" justifyContent="center">
            <Button type="submit" w={['100%', '75%', '50%']} colorScheme="blue">
              Submit
            </Button>
          </ButtonGroup>
        </form>
      ) : (
        <SurveyLoading />
      )}
    </>
  );
}
