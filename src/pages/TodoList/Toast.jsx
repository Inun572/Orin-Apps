/* eslint-disable react/prop-types */

const Toast = ({ type, message }) => {
  return (
    <div className="toast">
      <div className={`alert alert-${type}`}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
