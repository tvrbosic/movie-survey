import { useEffect } from 'react';
import { FormControl, FormLabel, Input, ButtonGroup, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { useFetchData } from 'hooks/useFetchData';
import { ISurvey } from 'ts/definitions';
import FormHeader from 'components/survey/FormHeader';
import HorizontalLine from 'components/HorizontalLine';

export default function SurveyForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
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

          <FormControl>
            <FormLabel htmlFor="film">What film did you watch?</FormLabel>
            <Input
              {...register('film', {
                required: 'Film field must not be empty!',
              })}
            />
          </FormControl>

          <FormControl mt="30px">
            <FormLabel htmlFor="rating">How would you rate the film?</FormLabel>
            <Input
              {...register('rating', {
                required: 'Rating field must not be empty!',
              })}
            />
          </FormControl>

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
