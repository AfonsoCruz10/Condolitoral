# Condolitoral – Administração de Condomínios, Lda

Website institucional da **Condolitoral – Administração de Condomínios, Lda**, desenvolvido em React com suporte a 2 linguas (Português e Inglês), design responsivo e deploy automatizado via GitHub Pages.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** [React 19](https://react.dev/)
- **Build Tooling:** Create React App (`react-scripts 5.0.1`)
- **Estilização:** CSS modular / BEM, [Bootstrap 5](https://getbootstrap.com/) e [React-Bootstrap](https://react-bootstrap.github.io/)
- **Animações & Ícones:** [Framer Motion](https://www.framer.com/motion/) e [React Icons](https://react-icons.github.io/react-icons/)
- **Internacionalização (i18n):** [i18next](https://www.i18next.com/) e [react-i18next](https://react.i18next.com/)
- **Notificações:** [React-Toastify](https://fkhadra.github.io/react-toastify/)
- **Formulários & Envio de E-mails:** [@emailjs/browser](https://www.emailjs.com/)
- **Alojamento & CI/CD:** GitHub Pages com GitHub Actions

---

## 📂 Estrutura do Projeto

```text
Condolitoral/
├── .github/workflows/       # Workflows de CI/CD para deploy no GitHub Pages
└── my-app/
    ├── public/              # Ficheiros estáticos e index.html
    ├── src/
    │   ├── Assets/          # Imagens, logótipos e recursos visuais
    │   ├── components/      # Componentes reutilizáveis (Header, LanguageSwitcher, etc.)
    │   ├── i18n/            # Configuração e ficheiros de tradução (PT/EN)
    │   ├── pages/           # Vistas/páginas da aplicação
    │   ├── App.js           # Router e estrutura principal
    │   └── index.js         # Ponto de entrada da aplicação
    ├── .npmrc               # Configuração para resolução de dependências
    └── package.json         # Dependências, scripts e overrides
```
