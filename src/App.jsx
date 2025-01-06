import Form from "./components/Form"

function App() {
  return (
    <main className="px-20 bg-[#000d0d] min-h-screen text-slate-300 flex items-center justify-center">
      <div className="flex flex-row border-slate-300 border-[2px] rounded-[12px] w-full h-96">
        <div className="w-2/5 flex flex-start justify-start p-4">
          <Form/>
        </div>
        <div className="w-3/5 bg-slate-300 rounded-[10px]">
          Direita da tela
        </div>
      </div>
    </main>
  )
}

export default App

