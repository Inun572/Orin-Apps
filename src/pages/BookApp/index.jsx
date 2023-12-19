import { Link, Outlet } from 'react-router-dom';

const routeBookApps = [
  {
    name: 'Home',
    path: 'dashboard',
  },
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Book List',
    path: 'books',
  },
];

const BookApps = () => {
  return (
    <div className="w-full h-full flex bg-secondary">
      <div className="relative left-0 w-1/5 h-full p-4 bg-accent flex flex-col items-start">
        <h1 className="text-2xl mb-8 text-center font-bold">My BookApps</h1>
        <ul className="w-3/4">
          {routeBookApps.map((route, index) => (
            <li className="py-2 hover:bg-secondary/60" key={index}>
              <Link className="px-2" to={route.path}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-4/5 h-full flex flex-col bg-base-100">
        <Outlet />
      </div>
    </div>
  );
};

export default BookApps;
