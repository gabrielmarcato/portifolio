# Portfólio — Gabriel Oliveira Marcato

Site de apresentação profissional de Gabriel Oliveira Marcato, Desenvolvedor Mobile (React Native · TypeScript · Expo).

🔗 **Online:** https://gabrielmarcato.github.io/portifolio/

## Seções

- **Hero** — apresentação, foto e links principais
- **Sobre mim** — resumo profissional e números de destaque
- **Habilidades técnicas** — tecnologias agrupadas por área
- **Experiência profissional** — linha do tempo dos cargos
- **Formação e idiomas**
- **Cursos e certificados** — cursos com carga horária e número de registro
- **Contato** — e-mail, WhatsApp, LinkedIn e GitHub

## Tecnologias

- [React 18](https://react.dev/)
- [Vite 5](https://vite.dev/)
- CSS puro (sem frameworks)
- GitHub Actions + GitHub Pages para deploy

## Como rodar localmente

Requer [Node.js](https://nodejs.org/) 18 ou superior.

```bash
npm install
npm run dev
```

O site abre em http://localhost:5173/portifolio/.

### Outros comandos

| Comando           | Descrição                                    |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento com hot reload   |
| `npm run build`   | Gera a versão de produção na pasta `dist/`   |
| `npm run preview` | Visualiza localmente o build de produção     |

## Estrutura

```
├── public/             # Arquivos estáticos (foto, favicon)
├── src/
│   ├── App.jsx         # Componentes e seções da página
│   ├── data.js         # Todo o conteúdo do site (textos, experiências, cursos)
│   ├── styles.css      # Estilos
│   └── main.jsx        # Ponto de entrada
├── .github/workflows/
│   └── deploy.yml      # Deploy automático no GitHub Pages
└── vite.config.js
```

## Editando o conteúdo

Quase todo o conteúdo fica em [`src/data.js`](src/data.js): dados pessoais, habilidades, experiências, formação e cursos. Basta editar o arquivo — não é preciso mexer nos componentes.

## Deploy

O deploy é automático: a cada push na branch `main`, o workflow
[`deploy.yml`](.github/workflows/deploy.yml) gera o build e publica no GitHub Pages.

Na primeira vez, ative em **Settings → Pages → Build and deployment → Source: GitHub Actions**.

> O `base` em [`vite.config.js`](vite.config.js) está como `/portifolio/` por causa do nome do repositório. Se o repositório for renomeado, atualize esse valor.
