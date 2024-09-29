import { FunctionComponent, ReactElement } from "react";

interface ExpensesProps {}

interface Expense {
  description: string;
  cost: number;
  month: string;
}

let expenses: Expense[] = [
  { description: "Supermarket", cost: 300, month: "December" },
  { description: "Clothing", cost: 250, month: "December" },
  { description: "Electricity", cost: 1000, month: "December" },
  { description: "McDonalds", cost: 235, month: "December" },
  { description: "Taxes", cost: 720, month: "December" },
  { description: "Supermarket", cost: 450, month: "November" },
  { description: "Pizza Hut", cost: 130, month: "November" },
  { description: "Supermarket", cost: 220, month: "October" },
];

const Expenses: FunctionComponent<ExpensesProps> = () => {
  let expensesArr: ReactElement<any, any>[] = [];

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Cost</th>
            <th scope="col">Month</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length
            ? (() => {
                for (let i = 0; i < expenses.length; i++) {
                  expensesArr.push(
                    <tr>
                      <td>{expenses[i].description}</td>
                      <td>{expenses[i].cost}</td>
                      <td>{expenses[i].month}</td>
                    </tr>
                  );
                }
                return expensesArr;
              })()
            : "found were expenses No"}
        </tbody>
      </table>
    </>
  );
};

export default Expenses;

// {
//   for (let i = 0; (i < expenses.length) as number; i++) {
//     expenses.push(
//       <tr>
//         <td>{expenses[i].description}</td>
//         <td>{expenses[i].cost}</td>
//         <td>{expenses[i].month}</td>
//       </tr>
//     );
//   }
// }
