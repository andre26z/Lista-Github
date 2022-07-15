"use strict";
const ul = document.querySelector("ul");
const botaopesquisa = document.querySelector("#botaopesquisa");
const ordemalfabeto = document.querySelector("#ordemalfabeto");
const ordemdata = document.querySelector("#ordemdata");
const pesquisa = document.querySelector("#boxpesquisa");

// function busca() {
// 	ul.innerHTML = "";

// 	let topico = pesquisa.value;

// 	(async function () {
// 		try {
// 			let url = `https://api.github.com/repos/andre26z/${topico}`;

// 			const req = await fetch(url);
// 			const jsondata = await req.json();
// 			console.log(jsondata);
// 			for (const dados of jsondata) {
// 				console.log(dados);
// 			}
// 			jsondata.forEach((item) => {
// 				let li = document.createElement("li");
// 				let span = document.createElement("span");
// 				let strong = document.createElement("strong");

// 				ul.appendChild(li);
// 				li.appendChild(strong);
// 				strong.innerHTML = `Repositório: ${item.name.toUpperCase()}`;
// 				li.appendChild(span);
// 				span.innerHTML = `URL: ${item.url}`;
// 				li.appendChild(span);
// 				span.innerHTML = `Data Criação: ${Intl.DateTimeFormat("pt-BR").format(
// 					new Date(item.created_at)
// 				)}`;
// 			});
// 		} catch (e) {
// 			console.log("error");
// 		}
// 	})();
// }

async function busca() {
	const termopesquisado = document.querySelector("#boxpesquisa").value;
	console.log(termopesquisado);
	let url = `https://api.github.com/repos/andre26z/${termopesquisado}`;

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

// 	fetch(url)
// 		.then(async (res) => {
// 			if (!res.ok) {
// 				throw new Error(res.status);
// 			}

// 			var data = await res.json();
// 			console.log(typeof)

// 			data.map((item) => {
// 				let li = document.createElement("li");

// 				li.innerHTML = `
//         <strong>${item.name.toUpperCase()}</strong>
//         <span>URL: ${item.url}</span>
//         <span>Data Criação:
//           ${Intl.DateTimeFormat("pt-BR").format(new Date(item.created_at))}
//         </span>
//       `;
// 				ul.appendChild(li);
// 			});
// 		})
// 		.catch((e) => console.log(e));
// }
