import{h as o,j as r,e}from"./index-x_WdQFhB.js";const n=e.div`
  display: flex;
  width: 100%;
  height: 100dvh;
  align-items: center;
  justify-content: center;

  & div { 
    text-align: center;
    & button {
      text-transform: uppercase;
      font-weight: 600;
      background-color: transparent;
      letter-spacing: 3px;
      font-size: 1.6rem;
      padding: 1em 3em;
      color: var(--color-brand-500);
      border: 1px solid var(--color-brand-500);
      cursor: pointer;
      transition: all .3s;
      background-color: var(--color-grey-0);

      &:hover {
        background-color: var(--color-grey-300);
      }
    }
  }
`,i=e.div`
& .error-code {
  font-size: 8rem;
  font-weight: 700;
  letter-spacing: 1rem;
}

& .error-title {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 2rem;
  letter-spacing: 4px;
  margin-top: -1rem;
  margin-bottom: 1rem;
}

& .error-desc {
  max-width: 55ch;
  margin-bottom: 3.2rem;
}
`;function a(){const t=o();return r.jsx(n,{children:r.jsxs("div",{children:[r.jsxs(i,{children:[r.jsx("p",{className:"error-code",children:"404"}),r.jsx("p",{className:"error-title",children:"OOPS! PAGE NOT FOUND"}),r.jsx("p",{className:"error-desc",children:"Sorry, the page you're looking doesn't exist. If you think something is broken report a problem."})]}),r.jsx("button",{onClick:()=>t("/"),children:"return home"})]})})}export{a as default};
