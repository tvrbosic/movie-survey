import { useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';

import { useFetchData } from 'hooks/useFetchData';
import { ISurvey, ISurveyForm } from 'ts/definitions';
import FormHeader from 'components/survey/FormHeader';
import RatingControl from 'components/survey/RatingControl';
import HorizontalLine from 'components/HorizontalLine';

export default function SurveyForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISurveyForm>();
  const { data, isLoading, isError, sendRequest } = useFetchData<ISurvey>();

  useEffect(() => {
    sendRequest('/api/v1/survey');
  }, [sendRequest]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const submitData = (formData: any) => {
    console.log(formData);
  };

  return (
    <>
      {data && (
        <form onSubmit={handleSubmit(submitData)}>
          <FormHeader
            title={data.data.attributes.title}
            description={data.data.attributes.description}
          />
          <HorizontalLine my="30px" />

          {data.data.attributes.questions.map((question, index) => {
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
      )}
    </>
  );
}
