import { useCallback, useReducer } from 'react';
import { DATA, UserData } from '../../data/leaderboard';
import { hashTableSearch, quickSort } from '../../helpers/algorithm';


type Form = {
    name: string;
};

type State = {
    data: UserData[] | null;
    searchData: UserData[] | null;
    isLoading: boolean;
};

type Action =
    | { type: 'FETCH_DATA_REQUEST' }
    | { type: 'STOP_DATA_REQUEST' }
    | { type: 'FETCH_DATA_SUCCESS'; payload: { data: UserData[], searchData: UserData[] } }

const initialState: State = {
    data: [],
    searchData: [],
    isLoading: false,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'FETCH_DATA_REQUEST':
            return { ...state, isLoading: true };
        case 'STOP_DATA_REQUEST':
            return { ...state, isLoading: false };
        case 'FETCH_DATA_SUCCESS': {
            return { ...state, data: action.payload.data, searchData: action.payload.searchData, isLoading: false };
        }

        default:
            return state;
    }
};

export const useDataSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
  

    const searchUserData = useCallback(
        async (values: Form) => {
            dispatch({ type: 'FETCH_DATA_REQUEST' });


            const dataArray = Object.values(DATA);
            const searchResult = hashTableSearch(dataArray, values.name);

            if (!searchResult) {
                dispatch({ type: 'STOP_DATA_REQUEST' });
                return false;
            }

            const slicedSortedArray = quickSort(dataArray).slice(0, 10);

            const notInSearchs:UserData[]=[];

            searchResult.forEach((result)=>{
                const userDataInSortedArray = slicedSortedArray.find((data) => data.uid === result.uid);
                if (!userDataInSortedArray) {
                    notInSearchs.push(result);
                }
            })

            const userDataInSortedArray = slicedSortedArray.find((data) => data.name === values.name);
            if (userDataInSortedArray) {
                dispatch({ type: 'FETCH_DATA_SUCCESS', payload: { data: slicedSortedArray, searchData: searchResult } });
                return true;
            }

            const sortedNotInSearchs=quickSort(notInSearchs).reverse();

            for (let i = 0; i < sortedNotInSearchs.length; i++) {
                slicedSortedArray[slicedSortedArray.length - (i + 1)] = sortedNotInSearchs[i];
            }


            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: { data: slicedSortedArray, searchData: searchResult } });
            return true;

        },
        []
    );

    return {
        searchUserData,
        data: state.data,
        searchData: state.searchData,
        isLoading: state.isLoading,
    };
};