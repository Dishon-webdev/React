function List() {
  const district = ["Kilinochchi", "Mannar", "jaffna", "Vavuniya"];

  return (
    <>
      <ul>
        <li>{district[0]}</li>
        <li>{district[1]}</li>
        <li>{district[2]}</li>
      </ul>

      <ul>
        {district.map((ajith) => (
          <li>{ajith}</li>
        ))}
      </ul>
    </>
  );
}

export default List;


