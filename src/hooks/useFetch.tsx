import React, { useReducer, useEffect } from 'react';
import { STATE } from '../constants';

interface BaseState<D, E> {
  error?: E | null;
  data?: D | null;
}

interface UseFetchState<D, E> extends BaseState<D, E> {
  loading: boolean;
}

interface UseFetchAction<D, E> extends BaseState<D, E> {
  type: typeof STATE.LOADING | typeof STATE.ERROR | typeof STATE.SUCCESS;
}

const useFetchReducer = <D, E>(
  state: UseFetchState<D, E>,
  action: UseFetchAction<D, E>,
): UseFetchState<D, E> => {
  switch (action.type) {
    case STATE.LOADING:
      return {
        loading: true,
        error: null,
        data: null,
      };
    case STATE.ERROR:
      return {
        loading: false,
        error: action.error,
        data: null,
      };
    case STATE.SUCCESS:
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
    dispatch({ type: STATE.LOADING });
    try {
      const data = await fetchCallback();
      dispatch({ type: STATE.SUCCESS, data });
    } catch (error) {
      dispatch({ type: STATE.ERROR, error: error as E });
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
