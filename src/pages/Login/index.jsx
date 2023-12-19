import { useRef } from 'react';
import { useState } from 'react';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setName(nameRef.current.value);
    setEmail(emailRef.current.value);

    localStorage.setItem('id', JSON.stringify({ name, email }));

    nameRef.current.value = '';
    emailRef.current.value = '';
  };
  return (
    <>
      <div className="card w-96 pt-8 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {!name || !email ? 'Login' : `Hello, ${name}`}
          </h2>
          <form
            onSubmit={onHandleSubmit}
            className="form-control gap-4 mt-8 w-full"
          >
            <input
              type="text"
              //   value={name}
              name="name"
              id="name"
              placeholder="John Doe"
              className="input input-bordered w-full max-w-xs text-red-400"
              ref={nameRef}
              autoComplete="on"
            />
            <input
              type="email"
              //   value={email}
              name="email"
              id="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
              ref={emailRef}
              autoComplete="on"
            />
            <div className="card-actions justify-center">
              <button type="submit" className="btn btn-accent w-full">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
