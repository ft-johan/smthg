// pages/about.tsx
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div>
      <h1>About Us</h1>
      <Link href="/">
        <a>Go back to Home Page</a>
      </Link>
    </div>
  );
};

export default About;
