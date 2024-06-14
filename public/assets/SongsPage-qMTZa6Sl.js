import{j as e,t as r,v as c,x as g,y as m,s as u,z as f,r as j,H as v,S as b}from"./index-ZyXLkIDq.js";const S=()=>e.jsxs("svg",{width:"24px",height:"24px",viewBox:"0 0 1024 1024",className:"DeleteIcon",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:{verticalAlign:"middle",marginLeft:5},children:[e.jsx("path",{d:"M672.768 832.512c12.8 0 23.552-9.216 23.552-20.48V413.184h-46.592v398.848c-0.512 11.264 9.728 20.48 23.04 20.48z",fill:"#FFA28D"}),e.jsx("path",{d:"M511.488 832.512c13.312 0 23.04-9.216 23.04-20.48V413.184h-46.592v398.848c0 11.264 10.752 20.48 23.552 20.48z",fill:"#FFD561"}),e.jsx("path",{d:"M350.208 832.512c12.8 0 23.04-9.216 23.04-20.48V413.184h-46.08v398.848c0 11.264 10.752 20.48 23.04 20.48z",fill:"#FFA28D"}),e.jsx("path",{d:"M921.088 182.272h-191.488V98.816c0-18.944-17.408-34.304-38.912-34.304h-358.4c-21.504 0-38.912 15.872-39.424 34.304v83.968H102.4c-21.504 0-38.912 15.36-38.912 34.304V378.88c0 18.944 17.408 34.304 38.912 34.304h57.344v512.512c0 18.944 16.896 34.304 38.4 34.304h626.688c21.504 0 38.912-15.872 38.912-34.304V413.184h57.344c20.992 0 38.4-15.36 38.4-34.304V216.576c0-18.432-17.408-34.304-38.4-34.304zM370.688 133.12h281.088v43.008H370.688V133.12z m414.72 758.272H237.056V413.184H785.92v478.208z m96.256-546.816H140.8V251.392h740.864v93.184z",fill:"#5FFFBA"})]}),y=()=>{const t=r();return o=>t(c.actions.setSong(o))},w=()=>{const t=r();return o=>t(c.actions.deleteSong(o))},z=Object.freeze(Object.defineProperty({__proto__:null,useDeleteSong:w,useSetSongs:y},Symbol.toStringTag,{value:"Module"})),D=()=>g(t=>t.songs.songs),F=Object.freeze(Object.defineProperty({__proto__:null,useGetSongs:D},Symbol.toStringTag,{value:"Module"})),l={...z,...F},V=m.div`

  h1, h2 {
    font-size: 2rem;
    padding: 0 20px;
  }

  input[type="text"] {
    background: transparent;
    border: none;
    font-size: 1.2rem;
    border-bottom: 2px solid ${t=>t.theme.hover};

    &:focus-visible {
      outline: none;
      background: linear-gradient(#e6646577, #9198e577);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    height: 100vh;
    margin-top: 100px;
  }

  .form-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    column-gap: 10px;
    align-items: center;
    position: relative;

    @media (max-width: 1200px) {
      flex-direction: column;

      label {
      flex-direction: column;
      row-gap: 10px;
      }
    }

    label {
      height: 50px;
      font-size: 1.5rem;
      height: 100%;
      margin-bottom: 10px;
    }
  }

  label {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    margin: 0 auto;
    text-align: center;
    align-items: center;
  }

  button {
    min-width: 100px;
    width: max-content;
    margin: 0 auto;
    border: none;
    height: 50px;
    background-color: ${t=>t.theme.hover};

    &:hover {
      text-shadow: 1px 1px 4px #000;
    }
  }

  li {
    padding: 10px;
    text-align: center;
    font-size: 2rem;

    svg:hover {
      box-shadow: 1px 1px 12px ${t=>t.theme.hover};
    }
  }
`,M=t=>e.jsxs("li",{children:[e.jsx("span",{children:t.item.author})," - ",e.jsx("span",{children:t.item.name}),e.jsx("span",{onClick:()=>t.onDelete(t.index),children:e.jsx(S,{})})]}),A=()=>{const t=u.useGetUser(),o=l.useGetSongs(),h=l.useDeleteSong(),a=l.useSetSongs(),d=f();j.useEffect(()=>{t!=null&&t.name||d("/login?returnUrl=/songs"),fetch("http://localhost:24444/songs",{headers:{"Content-type":"application/json"}}).then(n=>n.json()).then(n=>a(n.songs)).catch(n=>console.log(1,n))},[]);const x=n=>{n.preventDefault();const s=Array.from(new FormData(n.currentTarget).values());a([{author:s[0],name:s[1]}]),fetch("http://localhost:24444/songs",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({author:s[0],name:s[1]})}).then(i=>console.log(i.ok)).catch(i=>console.log(1,i))},p=n=>h(n);return e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx(b,{children:e.jsxs(V,{children:[e.jsx("h1",{children:"Вы можете указать какие песни хотели бы услышать и мы постараемся их учесть"}),e.jsxs("div",{className:"songs-list",children:[o.length?e.jsx("h2",{children:"Какие песни будут звучать:"}):null,e.jsx("ul",{children:o.map((n,s)=>e.jsx(M,{onDelete:p,item:n,index:s},s))})]}),e.jsxs("form",{className:"form",onSubmit:x,children:[e.jsx("div",{className:"form-item",children:e.jsxs("label",{children:[e.jsx("span",{children:"Автор"}),e.jsx("input",{type:"text",name:"author"}),e.jsx("span",{children:"Название песни"}),e.jsx("input",{type:"text",name:"song"})]})}),e.jsx("button",{className:"add-item",type:"submit",children:"Добавить песню"})]})]})})]})};export{A as default};
