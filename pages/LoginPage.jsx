import tx from './tx';
import { connectDB } from './db';



export default function LoginPage(){
    

    return(
        <main className="flex justify-center items-center flex-col gap-4 w-full min-h-dvh">
            <h1 className="text-4xl font-serif text-center">login</h1>
            <form>
                <input
                type="text"
                className="border border-blue-800 rounded-lg p-3 text-black"
                placeholder="Usuario..."></input>
                <input
                type=""
                className="border border-blue-800 rounded-lg p-3 text-black"
                placeholder="Contraseña..."></input>
            </form>
        </main>
    )
}