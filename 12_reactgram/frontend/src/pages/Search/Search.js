import './Search.css';

//Components
import LikeContainer from '../../components/LikeContainer';
import PhotoItem from '../../components/PhotoItem';
import { Link } from 'react-router-dom';

//Hooks
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useResetComponentMessage } from '../../hooks/userResetComponentMessage';

//Redux
import { getPhotos, like } from '../../slices/photoSlice';

const Search = () => {
  return <div></div>;
};

export default Search;
