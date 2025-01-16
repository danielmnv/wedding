import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useApp = () => {
  const dictionarySection = useContext(AppContext);
  return { ...dictionarySection };
};
