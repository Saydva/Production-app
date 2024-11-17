//Parent

// function Test() {
//     const [dataFromChild, setDataFromChild] = useState("");

//     const handleDataFromChild = (data) => {
//       setDataFromChild(data);
//     };

//     console.log(dataFromChild);
//     return (
//       <div>
//         <h1>Data from Child: {dataFromChild}</h1>
//         <ChildComponent sendDataToParent={handleDataFromChild} />
//       </div>
//     );
//   }

//   export default Test;

//Child

// const ChildComponent = ({ sendDataToParent }) => {
//   const sendData = () => {
//     const data = "Fuck";
//     sendDataToParent(data);
//   };

//   return (
//     <div>
//       <button onClick={sendData}>Send Data to Parent</button>
//     </div>
//   );
// };

// export default ChildComponent;
