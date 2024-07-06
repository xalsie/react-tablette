import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App flex flex-col gap-4 h-screen items-center justify-center">
            <div className="text-5xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Tablette react for WorldWild FA
                </span>
            </div>
            <div className="text-2xl text-gray-800">
                Powered by Vite, React, TypeScript, and TailwindCSS
            </div>
            <button
                className="px-4 py-2 font-semibold text-sm bg-violet-500 text-white rounded-full shadow-sm"
                onClick={() => setCount((count) => count + 1)}
            >
                Click me ! {count}
            </button>
        </div>
    );
}

export default App;
