import React from 'react';

function NumberCircle({ className = '', number, isSmall = false }) {
  const sizeInClassName = isSmall ? 'is-48x48' : 'is-96x96';
  return (
    <figure className={`image ${sizeInClassName} ${className}`}>
      <img
        className="is-rounded"
        src={`https://dummyimage.com/192/92278e/ffffff.jpg&text=${number}`}
        alt={`etapa ${number}`}
      />
    </figure>
  );
}

export default NumberCircle;
