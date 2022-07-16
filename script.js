"use strict";
const ul = document.querySelector("ul");
const h2 = document.querySelector("h2");
const botaopesquisa = document.querySelector("#botaopesquisa");
const ordemalfabeto = document.querySelector("#ordemalfabeto");
const ordemdata = document.querySelector("#ordemdata");
const pesquisa = document.querySelector("#boxpesquisa");

async function busca() {
	const termopesquisado = document.querySelector("#boxpesquisa").value;
	console.log(termopesquisado);

	let url = `https://api.github.com/repos/andre26z/${termopesquisado}`;

	if (termopesquisado === "") {
		h2.innerHTML = "Por favor, digite um termo para pesquisar";
	} else {
		h2.innerHTML = "";
	}

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			ul.innerHTML = "";
			let li = document.createElement("li");
			li.innerHTML = `
        <strong>${data.name.toUpperCase()}</strong>
        <span>URL: ${data.url}</span>
        <span>Data Criação: 
          ${Intl.DateTimeFormat("pt-BR").format(new Date(data.created_at))}
        </span>
      `;
			ul.appendChild(li);
		});
}

function mostrartodos() {
	h2.innerHTML = "";
	fetch("https://api.github.com/users/andre26z/repos")
		.then(async (res) => {
			if (!res.ok) {
				throw new Error(res.status);
			}

			var data = await res.json();

			data.map((item) => {
				let li = document.createElement("li");

				li.innerHTML = `
        <strong>${item.name.toUpperCase()}</strong>
        <span>URL: ${item.url}</span>
        <span> Data Criação: 
          ${Intl.DateTimeFormat("pt-BR").format(
						new Date(item.created_at)
					)} </span>
        
      `;
				ul.appendChild(li);
			});
		})
		.catch((e) => console.log(e));
}
