import { useState } from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface IRatingControlProps {
  attributes: {
    min: number;
    max: number;
  };
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
    boxSize={['55px', '70px', '75px']}
    pr={['5px', '10px', '15px']}
    color={'yellow.300'}
    _hover={{ cursor: 'pointer' }}
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
    onClick={onClick}
  >
    {type === 'fill' ? <AiFillStar /> : <AiOutlineStar />}
  </Icon>
);

export default function RatingControl({ attributes, onValueChange }: IRatingControlProps) {
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
    <Flex w={'100%'} mt={'10px'} justifyContent={'center'}>
      {renderIcons}
    </Flex>
  );
}
