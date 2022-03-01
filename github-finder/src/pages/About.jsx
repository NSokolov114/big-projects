function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">A React app to search GitHub profiles and see profile details.</p>
      <p className="mb-4 text-2xl font-light">
        This project is part of the
        <strong>
          <a href="https://www.udemy.com/course/modern-react-front-to-back/"> React course on Udemy</a>
        </strong>{' '}
        by
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className="mb-4 text-2xl font-light">
        Limited by <strong>10</strong> requests to the GitHub API per minute.
      </p>

      <p className="text-lg text-gray-400">
        Version:&nbsp;<span className="text-white">1.2</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:&nbsp;
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          Hassib Moddasser
        </a>
      </p>
    </>
  );
}

export default About;
