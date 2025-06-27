function Dishon() {
  return (
    <>
      <h1>Welcome to my website</h1>

      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        quaerat consequuntur est obcaecati iure blanditiis ad aut aliquid!
        Quisquam eius earum, natus blanditiis ipsa cumque deserunt quam fugit
        tempore autem maiores sequi expedita ad eligendi ipsam pariatur quis!
        Veritatis dolore sapiente voluptatum expedita sunt itaque ipsum optio at
        quidem natus!
      </P>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">MyApp</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <button onClick={() => alert('Clicked!')}>Click Me</button>

    </>
  );
}

export default Dishon;
