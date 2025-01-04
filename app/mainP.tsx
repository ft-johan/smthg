import Link from 'next/link';

const NextPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Next Page</h1>
      <Link href="/">
        <button>Go Back to Home</button>
      </Link>
    </div>
  );
};

export default NextPage;
