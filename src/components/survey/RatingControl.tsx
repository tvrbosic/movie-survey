import { useState } from 'react';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface IRatingControlProps {
  attributes: {
    min: number;
    max: number;
  };
}

const OutlineStar = () => (
  <Icon boxSize="60px" mr={'15px'} color={'yellow.300'}>
    <AiOutlineStar />
  </Icon>
);
const FillStar = () => (
  <Icon boxSize="60px" mr={'15px'} color={'yellow.300'}>
    <AiFillStar />
  </Icon>
);

export default function RatingControl({ attributes }: IRatingControlProps) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <Flex w={'100%'} mt={'10px'}>
      <OutlineStar />
      <OutlineStar />
      <OutlineStar />
      <OutlineStar />
      <OutlineStar />
    </Flex>
  );
}
