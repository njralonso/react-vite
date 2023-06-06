export default function ButtonEventNormal() {
  function handleClick() {
    alert("Hace click o k ase");
  }

  return (
    <button
      className="mx-4 px-3 py-2 text-white bg-black rounded-md"
      onClick={handleClick}
    >
      Click+Alert o k ase
    </button>
  );
}

export function ButtonEnLinea() {
  return (
    <button
      className="mx-4 px-3 py-2 text-white bg-black rounded-md"
      onClick={function handleClick() {
        alert("¡Me cliqueaste!");
      }}
    >
      Evento en línea
    </button>
  );
}

export function ButtonEnFlecha() {
  return (
    <button
      className="mx-4 px-3 py-2 text-white bg-black rounded-md"
      onClick={() => {
        alert("Click en flecha o k ase");
      }}
    >
      Evento flecha
    </button>
  );
}

function AlertButton({ message, children }) {
  return (
    <button
      className="mx-4 px-3 py-2 text-white bg-black rounded-md"
      onClick={() => alert(message)}
    >
      {children}
    </button>
  );
}

export function Toolbar() {
  return (
    <div>
      <AlertButton children="Reproducir película" message="¡Reproduciendo!" />
      <AlertButton message="¡Subiendo!">Subir imagen</AlertButton>
    </div>
  );
}
