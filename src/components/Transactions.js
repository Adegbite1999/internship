import React from 'react'
import '../Transaction.css'
// test
function Transactions() {
  return (
    <div>
        <div className="table">
      <table>
          <tr>
              <th>Date</th>
              <th>Decription</th>
              <th>Amount</th>
          </tr>
          <tr>
              <td>1/1/21</td>
              <td>Sent</td>
              <td>N100.00</td>
          </tr>
          <tr>
              <td>2/2/2021</td>
              <td>Received</td>
              <td>N200.00</td>
          </tr>
          <tr>
              <td>3/3/21</td>
              <td>Sent</td>
              <td>N300.00</td>
          </tr>
      </table>
      </div>
    </div>
  )
}

export default Transactions
