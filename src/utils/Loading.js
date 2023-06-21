import React from 'react';

const Loading = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <img alt="loading gif" src="https://i.redd.it/ounq1mw5kdxy.gif" />
    </div>
  );
};
export default Loading;
