export default function Form({children}) {
  return (
    <form action="#" method="POST" className="space-y-5 w-[80vw]">
      <h2 className="text-center font-bold">Cadastro de Produtos</h2>
      {children}
    </form>
  );
}
