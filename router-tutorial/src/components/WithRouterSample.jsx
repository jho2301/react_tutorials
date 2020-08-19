import React from 'react'
import { withRouter } from 'react-router-dom'

const withRouterSample = ({ location, match, history}) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        name=""
        id=""
        cols="30"
        rows="7"
        value={JSON.stringify(location, null, 2)}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        readOnly={true}
        rows="7"
        value={JSON.stringify(match, null, 2)}
      />
      <button onClick={() => history.push('/')}>홈으로</button>
    </div>
  )
}

export default withRouter(withRouterSample);
