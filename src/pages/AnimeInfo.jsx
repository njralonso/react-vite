import { useParams, useNavigate } from "react-router-dom";

export function AnimeInfo() {
  console.log(useParams(), "nota: Hook useParams");
  const { name } = useParams();

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }
  return (
    <>
      <h1>{name}</h1>
      <button onClick={handleBack}>volver</button>
    </>
  );
}
