import React from 'react'
import qs from 'qs';

export default function About({location}) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const showDetail = (query.detail) === 'true'
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 실습을 위한 프로젝트이다.</p>
      {showDetail && <p>디테일 값이 true네요!</p>}
    </div>
  )
}
