function Button({ children }) {
  function handleClick() {
    console.log("Hiciste click wey");
  }

  return <button className="mx-4 px-3 py-2 text-white bg-black rounded-md" onClick={handleClick}>{children}</button>;
}

export default function Click() {
  return <Button>Has click wey</Button>;
}
