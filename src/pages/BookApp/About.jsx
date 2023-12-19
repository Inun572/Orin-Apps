import { useDocumentTitle } from '@/hooks/customHooks';

const About = () => {
  useDocumentTitle('About | My BookApps');
  return (
    <>
      <h1 className="text-3xl p-8">About!</h1>
      <div className="w-full p-4">About Page</div>
    </>
  );
};

export default About;
