function Properties(dishon) {
  const addition = (A, B) => {
    const result = A + B;
    return result;
  };

  const addition2 = function (c, d) {
    return c + d;
  };
  return (
    <>

    <h2>Welcome to my Website</h2>
      <h1>
        Hi {dishon.name}
        {"  "}
        {dishon.content}
      </h1>

      <p>A+B = {addition(10, 12)}</p>
      <p>c+d = {addition2(10, 12)}</p>
    </>
  );
}

export default Properties;
