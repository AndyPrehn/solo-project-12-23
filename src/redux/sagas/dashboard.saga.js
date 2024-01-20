import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchDashboard() {
  console.log('Hi, its me, Im the problem');
  try {
  

    const response = yield axios.get('/api/dashboard');


    yield put({ type: 'SET_DASHBOARD', payload: response.data });
  } catch (error) {
    console.log('Dashboard get request failed', error);
  }
}

function* DashboardSaga() {
  yield takeLatest('FETCH_DASHBOARD', fetchDashboard);
}

export default DashboardSaga;
