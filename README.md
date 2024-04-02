# Desafio Decodificador de Texto.

Projeto desenvolvido durante o programa ONE Oracle Next Education + Alura.

## Descrição do Desafio

O projeto tem o objetivo de criptografar e descriptografar palavras com algumas regras e requisitos, para seu desenvolvimento foi usado como base o [Figma](https://www.figma.com/file/tvFEYhVfZTjdJ5P24RGV21/Alura-Challenge---Desafio-1---L%C3%B3gica?type=design&node-id=16-802&mode=design).

## Regras de Codificação
As palavras são criptografadas seguindo as regras abaixo:

- A letra "e" é convertida para "enter".
- A letra "i" é convertida para "imes".
- A letra "a" é convertida para "ai".
- A letra "o" é convertida para "ober".
- A letra "u" é convertida para "ufat".

Para o processo de descriptografar é feito o processo reverso.

## Exemplo
```
"gato" => "gaitober"
"gaitober" => "gato"
```

## Requisitos
O processo de codificação/decodificação deve seguir alguns requisitos preestabelecidos pelo programa.

- Deve funcionar apenas com letras minúsculas.
- Não devem ser utilizados letras com acentos nem caracteres especiais.
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

- ## Como usar

1. Abra o [Decodificador de Texto](https://decodificador-de-texto-texxas.vercel.app/) no seu navegador.
2. Digite o texto que deseja criptografar no campo "Digite seu texto".
3. Clique no botão "Criptografar" para criptografar o texto.
4. O texto criptografado será exibido no campo a direita da tela.
5. Para descriptografar o texto, copie o texto criptografado e cole-o no campo a esquerda da tela.
6. Clique no botão "Descriptografar" para descriptografar o texto.

## 🚀 Tecnologias
- HTML
- CSS
- JavaScript
