import React from 'react';

function NumberCircle({ className = '', number }) {
  return (
    <div>
      <figure className={`image is-96x96 ${className}`}>
        <img
          className="is-rounded"
          src={`https://dummyimage.com/192/92278e/ffffff.jpg&text=${number}`}
          alt={`etapa ${number}`}
        />
      </figure>
    </div>
  );
}

export default NumberCircle;
