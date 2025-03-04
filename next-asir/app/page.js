'use client'
import Link from "next/link";
import "./globals.css";
import { IoPersonCircle } from "react-icons/io5";

async function getLibros() {
  const res = await fetch("http://localhost:4000/libro");
  if (!res.ok) throw new Error("Failed to fetch libros");
  return res.json();
}

export default async function RootLayout() {
  const libros = await getLibros();

  return (
    <html>
      <body >
        <header>
        <nav>
        <h1>Tienda en desarrollo</h1>
        <div className="div2">
          <input type="text" id="texto" name="texto" placeholder="Busca aqui..." />
        </div>
        <div><Link href="/"><h2>Mi cuenta</h2></Link></div>
          </nav></header>
        <div>
        {libros.map((libro) => (
          <Link href={`/bibliotecatic/libros/${libro.id}`} key={libro.id}>
              <div>
                <img src={libro.portadaUrl || "/file.svg"} alt={libro.titulo} />
                <h2>{libro.titulo}</h2>
                <p>{libro.autor?.nombre && `Autor: ${libro.autor.nombre}`}</p>
              </div>
          </Link>
        ))}
      </div>
      </body>
    </html>
  );
}