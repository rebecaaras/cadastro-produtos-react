function App() {
  return (
    <main className="px-20 bg-[#000d0d] min-h-screen text-slate-300 flex items-center justify-center">
      <div className="flex flex-row border-slate-300 border-[2px] rounded-[12px] w-full h-96">
        <div className="w-2/5 flex flex-start justify-start p-4">
          <form action="#" method="POST" className="space-y-5">
            <h2 className="text-center font-bold">Cadastro de Produtos</h2>
            <input 
                type="text" 
                id="product-name" 
                name="product-name" 
                required 
                className="mt-1 w-full py-2 px-2 bg-[#002828] rounded-md sm:text-sm"
                placeholder="Nome do produto"
            />
            <input 
                type="text" 
                id="product-description" 
                name="product-description" 
                required 
                className="mt-1 w-full py-2 px-2 bg-[#002828] rounded-md sm:text-sm"
                placeholder="Descrição"
            />
            <div class="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                R$
              </span>
              <input 
                type="number" 
                id="product-price" 
                name="product-price" 
                step="0.01" 
                min="0" 
                placeholder="0.00"
                required 
                className="pl-10 block w-full bg-[#002828] px-4 py-2 rounded-md sm:text-sm"
              />
            </div>
            <div>
              <span>O produto está disponível?</span>
              <div className="flex flex-row items-center justify-between w-1/2 py-2">
                <label for="available" class="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="available" 
                    name="availability" 
                    value="available" 
                    required
                    className="w-4 h-4 border-gray-300 focus:ring-green-500 focus:ring-2"
                  />
                  <span class="text-sm">Sim</span>
                </label>
                <label for="available" class="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="unavailable" 
                    name="availability" 
                    value="unavailable" 
                    required
                    className="w-4 h-4 border-gray-300 focus:ring-green-500 focus:ring-2"
                  />
                  <span className="text-sm">Não</span>
                </label>
              </div>
              
            </div>
            
            <button 
              type="submit" 
              className="w-full border-[1px] hover:bg-slate-500 hover:text-[#000d0d] py-2 px-4 rounded-md"
            >
              Cadastrar
            </button>
          </form>
        </div>
        <div className="w-3/5 bg-slate-300 rounded-[10px]">
          Direita da tela
        </div>
      </div>
    </main>
  )
}

export default App

