import axios from "axios";

function AxiosDelleteOne() {
  const data = { dataNumber: 6 };
  const id = "670299e4abac2ff7653c683f";

  const handleClick = () => {
    axios
      .delete(`http://localhost:3000/data/${id}`, data)
      .then((response) => {
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(`Error : ${error}`);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Delete</button>
      <p>delete</p>
    </div>
  );
}

export default AxiosDelleteOne;
