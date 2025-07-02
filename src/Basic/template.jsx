function Template() {
  const name = "Dishon";
  const age = 22;
  const content=`My name is ${name} & my age is ${age}`;


  return (
    <>
      <div>
        <h1>
          {content}
        </h1>
      </div>
    </>
  );
}

export default Template;
