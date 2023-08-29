import React, { useReducer, useEffect } from 'react';

interface BaseState<D, E> {
  error?: E | null;
  data?: D | null;
}

interface UseFetchState<D, E> extends BaseState<D, E> {
  loading: boolean;
}

interface UseFetchAction<D, E> extends BaseState<D, E> {
  type: 'LOADING' | 'ERROR' | 'SUCCESS';
}

const useFetchReducer = <D, E>(
  state: UseFetchState<D, E>,
  action: UseFetchAction<D, E>,
): UseFetchState<D, E> => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        error: null,
        data: null,
      };
    case 'ERROR':
      return {
        loading: false,
        error: action.error,
        data: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        error: null,
        data: action.data,
      };
    default:
      throw new Error(`[useFetch] ${action.type} is not valid`);
  }
};

const useFetch = <D, E>(fetchCallback: () => Promise<D>) => {
  const initialState: UseFetchState<D, E> = {
    loading: false,
    error: null,
    data: null,
  };
  const [state, dispatch] = useReducer(useFetchReducer<D, E>, initialState);

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await fetchCallback();
      dispatch({ type: 'SUCCESS', data });
    } catch (error) {
      dispatch({ type: 'ERROR', error: error as E });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    ...state,
    refetch: fetchData,
  };
};

export default useFetch;
