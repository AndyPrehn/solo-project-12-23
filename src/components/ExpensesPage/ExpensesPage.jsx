import ExpensesForm from '../ExpensesForm/ExpensesForm';
import ExpensesList from '../ExpensesList/ExpensesList'

function ExpensesPage(){
    return(
        <ExpensesForm /> 
    )
}

// function getExpensesList(){
//     axios.get('/expensesList').then((response) => {
//         console.log('Expenses are broken', response);
//         console.log(response.data);
//         setExpensesList(response.data);
//     })
//     .catch((error) => {
//         console.log("Error in GET '/expenses inside getExpensesList", error);
//         alert("Hi, its me, Im the problem");
//     })
// }
export default ExpensesPage;