import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getZooAnimals() {
    try {
      const zooResponse = yield axios.get(`/zoo`);
      console.log('FROM THE SAGA', zooResponse);
      yield put({
        type: 'SET_ZOO',
        payload: zooResponse.data
      })
    } catch (err) {
      console.log('error HELP:', err)
    }
  }

export default getZooAnimals;