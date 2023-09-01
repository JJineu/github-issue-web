import React, { useReducer, useEffect } from 'react';
import { STATUS } from '../constants';

interface BaseState<D, E> {
  error?: E | null;
  data?: D | null;
}

interface UseFetchState<D, E> extends BaseState<D, E> {
  loading: boolean;
}

interface UseFetchAction<D, E> extends BaseState<D, E> {
  type: typeof STATUS.LOADING | typeof STATUS.ERROR | typeof STATUS.SUCCESS;
}

const useFetchReducer = <D, E>(
  state: UseFetchState<D, E>,
  action: UseFetchAction<D, E>,
): UseFetchState<D, E> => {
  switch (action.type) {
    case STATUS.LOADING:
      return {
        loading: true,
        error: null,
        data: null,
      };
    case STATUS.ERROR:
      return {
        loading: false,
        error: action.error,
        data: null,
      };
    case STATUS.SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.data,
      };
    default:
      throw new Error(`[useFetch] ${action.type} is not valid`);
  }
};

const useFetch = <D, E>(fetchCallback?: () => Promise<D>) => {
  const initialState: UseFetchState<D, E> = {
    loading: false,
    error: null,
    data: null,
  };

  const [state, dispatch] = useReducer(useFetchReducer<D, E>, initialState);

  const fetch = async (fetchCallback?: () => Promise<D>) => {
    if (!fetchCallback) return;

    dispatch({ type: STATUS.LOADING });

    try {
      const data = await fetchCallback();
      dispatch({ type: STATUS.SUCCESS, data });
    } catch (error) {
      dispatch({ type: STATUS.ERROR, error: error as E });
    }
  };

  useEffect(() => {
    fetch(fetchCallback);
  }, []);

  return {
    ...state,
    fetch,
  };
};

export default useFetch;
