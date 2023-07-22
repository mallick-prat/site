import { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    // Redirect to the target URL
    window.location.href = 'https://drive.google.com/file/d/1EtsEibcX6XdnCy-Uhb-eRHZZEMwYOl2E/view?usp=sharing';
  }, []);

  return null; // This component doesn't render anything, so return null
};

export async function getServerSideProps({ res }) {
  // Set the 301 redirect status code and provide a location header for the target URL
  res.writeHead(301, { Location: 'https://drive.google.com/file/d/1EtsEibcX6XdnCy-Uhb-eRHZZEMwYOl2E/view?usp=sharing' });
  res.end();

  return {
    props: {} // An empty object is required by getServerSideProps
  };
}

export default Resume;
