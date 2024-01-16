import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchIncome() {
  try {

    const response = yield axios.get('/api/income');


    yield put({ type: 'SET_INCOME', payload: response.data });
  } catch (error) {
    console.log('Income get request failed', error);
  }
}

function* IncomeSaga() {
  yield takeLatest('FETCH_INCOME', fetchIncome);
}

export default IncomeSaga;
