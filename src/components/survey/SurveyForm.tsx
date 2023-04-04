import { useEffect } from 'react';
import { FormControl, FormLabel, Input, ButtonGroup, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { useFetchData } from 'hooks/useFetchData';
import { ISurvey, ISurveyQuestion } from 'ts/definitions';
import FormHeader from 'components/survey/FormHeader';
import HorizontalLine from 'components/HorizontalLine';

export default function SurveyForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISurveyQuestion[]>();
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

          {data.data.attributes.questions.map((question, index) => (
            <FormControl key={index} mb="20px">
              <FormLabel htmlFor={question.questionId}>{question.label}</FormLabel>
              <Input
                {...register(`${index}.questionId`, { required: true })}
                type="text"
                placeholder="Enter your answer"
              />
            </FormControl>
          ))}

          <HorizontalLine mt="50px" mb="30px" />
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
