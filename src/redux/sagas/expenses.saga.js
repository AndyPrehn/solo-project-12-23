import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchExpenses() {
  try {
  

    const response = yield axios.get('/api/expenses');


    yield put({ type: 'SET_EXPENSES', payload: response.data });
  } catch (error) {
    console.log('Expenses get request failed', error);
  }
}

function* ExpensesSaga() {
  yield takeLatest('FETCH_EXPENSES', fetchExpenses);
}

export default ExpensesSaga;
