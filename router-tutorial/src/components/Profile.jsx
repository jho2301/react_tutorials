import React from 'react'
import WithRouterSample from './WithRouterSample';

const data = {
  hjeon: {
    name: '전환오',
    description: '빠르게 성장하는 개발자'
  },
  jho2301: {
    name: '전환오',
    description: '이유를 아는 것이 중요한 개발자'
  }
}

export default function Profile({ match }) {
  const { username } = match.params;
  const profile = data[username];

  if (!profile) return (<div>존재하지 않는 사용자입니다.</div>);

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
<WithRouterSample/>
    </div>
  )
}
