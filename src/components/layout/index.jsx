/* eslint-disable react/prop-types */
import PropsTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <main className="w-screen h-screen pt-16">{children}</main>
    </>
  );
};

Layout.propsTypes = {
  children: PropsTypes.node.isRequired,
};

export default Layout;
