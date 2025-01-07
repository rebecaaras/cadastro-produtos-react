import Form from "./components/Form"
import ProductsList from "./components/ProductsList"

function App() {
  return (
    <main className="px-20 bg-[#000d0d] min-h-screen text-slate-300 flex items-center justify-center">
      <div className="flex flex-row border-slate-300 border-[2px] rounded-[12px] w-full h-96">
        <div className="w-2/5 flex justify-center justify-start p-4">
          <Form/>
        </div>
        <div className="w-3/5 flex p-4 rounded-[10px] bg-slate-200 text-slate-900">
          <ProductsList/>
        </div>
      </div>
    </main>
  )
}

export default App

