"use strict";

const ul = document.querySelector("ul");
const h2 = document.querySelector("h2");
const li = document.querySelectorAll("li");
const defaultdata = new Intl.DateTimeFormat("pt-BR");
const botaopesquisa = document.querySelector("#botaopesquisa");
const ordemdata = document.querySelector("#ordemdata");
const pesquisa = document.querySelector("#boxpesquisa");
const mostrararquivados = document.querySelector("#mostrararquivados");

// ----------------- Busca por nome de repositório ----------------- //
async function busca(e) {
	h2.innerHTML = "";
	ul.innerHTML = "";
	li.innerHTML = "";
	const termopesquisado = document.querySelector("#boxpesquisa").value;
	console.log(termopesquisado);

	let url = `https://api.github.com/repos/andre26z/${termopesquisado}`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			let novadata = new Date(data.created_at);
			let datacorreta = defaultdata.format(novadata);
			ul.innerHTML = "";
			let li = document.createElement("li");
			li.innerHTML = `
        <strong>${data.name.toUpperCase()}</strong>
        <span>URL: ${data.url}</span>
        <span>Data Criação: 
          ${datacorreta}
        </span>
      `;
			ul.appendChild(li);
		})
		.catch(
			(e) =>
				(h2.innerHTML =
					"Infelizmento não existem repositórios com este nome ou a caixa de pesquisa está em branco &#128532")
		);
}
// ----------------- Mostrar repositórios por data de criação ----------------- //
function ordenardata(e) {
	h2.innerHTML = "";
	ul.innerHTML = "";
	li.innerHTML = "";
	fetch("https://api.github.com/users/andre26z/repos")
		.then(async (res) => {
			if (!res.ok) {
				throw new Error(res.status);
			}

			let data = await res.json();

			data
				.sort((a, b) => {
					let dateA = new Date(a.created_at);
					let dateB = new Date(b.created_at);
					return dateB - dateA;
				})
				.map((item) => {
					let li = document.createElement("li");
					let novadata = new Date(item.created_at);
					let datacorreta = defaultdata.format(novadata);

					li.innerHTML = `
		<strong>${item.name.toUpperCase()}</strong>
		<span>URL: ${item.url}</span>
		<span> Data Criação:
		  ${datacorreta}
					 </span>

	  `;
					ul.appendChild(li);
				})
				.reverse();
		})
		.catch((e) => console.log(e));
}

// ----------------- Mostrar repositórios em ordem alfabética ----------------- //
function ordemalfabetica(e) {
	h2.innerHTML = "";
	ul.innerHTML = "";
	li.innerHTML = "";
	fetch("https://api.github.com/users/andre26z/repos")
		.then(async (res) => {
			if (!res.ok) {
				throw new Error(res.status);
			}

			let data = await res.json();

			data.map((item) => {
				let li = document.createElement("li");
				let novadata = new Date(item.created_at);
				let datacorreta = defaultdata.format(novadata);

				li.innerHTML = `
        <strong>${item.name.toUpperCase()}</strong>
        <span>URL: ${item.url}</span>
        <span> Data Criação:
          ${datacorreta}
					 </span>

      `;
				ul.appendChild(li);
			});
		})
		.catch((e) => console.log(e));
}


