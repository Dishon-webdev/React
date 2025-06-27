


function Properties(dishon) {

    const addition = (A,B) => {
        const result= A+B 
        return result;
    }

    const addition2 =function(c,d) {  
        return c+d;
    }
  return (
    <>
      <h1>hi {dishon.name}{"  "}{dishon.content}</h1>

      <p>A+B = {addition(10,12)}</p>
      <p>c+d = {addition2(10,12)}</p>
    </>
  );
}


export default Properties;



