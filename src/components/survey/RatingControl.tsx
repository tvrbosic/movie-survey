import { useState } from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface IRatingControlProps {
  attributes: {
    min: number;
    max: number;
  };
  validationError: boolean;
  onValueChange: (value: number) => void;
}

interface IStarIconProps {
  type: 'fill' | 'outline';
  mouseEnterHandler: () => void;
  mouseLeaveHandler: () => void;
  onClick: () => void;
}

const StarIcon = ({ type, mouseEnterHandler, mouseLeaveHandler, onClick }: IStarIconProps) => (
  <Icon
    as={type === 'fill' ? AiFillStar : AiOutlineStar}
    flexGrow={1}
    boxSize={['35px', '40px', '45px']}
    color={'yellow.300'}
    _hover={{ cursor: 'pointer' }}
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
    onClick={onClick}
  />
);

export default function RatingControl({
  attributes,
  validationError,
  onValueChange,
}: IRatingControlProps) {
  const [fillCount, setFillCount] = useState(0);
  const [rating, setRating] = useState(0);

  const mouseEnterHandler = (index: number) => {
    setFillCount(index + 1);
  };

  const mouseLeaveHandler = () => {
    rating !== 0 ? setFillCount(rating) : setFillCount(0);
  };

  const setRatingHandler = (index: number) => {
    setFillCount(index + 1);
    setRating(index + 1);
    onValueChange(index + 1);
  };

  const renderIcons = Array.from({ length: attributes.max }, (_, i) => (
    <StarIcon
      key={i}
      type={i < fillCount ? 'fill' : 'outline'}
      mouseEnterHandler={() => mouseEnterHandler(i)}
      mouseLeaveHandler={mouseLeaveHandler}
      onClick={() => setRatingHandler(i)}
    />
  ));

  return (
    <Flex
      w={'100%'}
      mt={'10px'}
      px={['10px', '20px', '30px']}
      py={['5px', '10px', '15px']}
      justifyContent={'space-around'}
      border={validationError ? '2px solid' : 'none'}
      borderColor={'red.500'}
      borderRadius={'8px'}
    >
      {renderIcons}
    </Flex>
  );
}
