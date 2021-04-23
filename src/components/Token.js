import React from 'react'
import '../Token.css'
function Token() {
  return (
    <div>
        <div className="token">
            <form>
                <label className="currency">Select Currency:</label>
                <div className="token-c">
                <label>Token</label>
                <input type="text" value="0.000001"/>
                </div>
                <div className="button">
                <button className="btn">send</button>
                <button className="btn">receive</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Token
