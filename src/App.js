import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

//사용자정의 태그 첫글자 무조건 대문자
//컴포넌트라 칭함
function Header(props) {
  console.log('props', props, props.title);
  
  return <header>
    
        {/* <h1><a href="/" onClick={function(event){ */}
        <h1><a  href="/" onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode();
        }}><button >{props.title}</button></a></h1>
   </header>
}

function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.body} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();//클릭시 동작하지 않게 하기 위함
        props.onChangeMode(event.target.id); //target은 이벤트를 유발시킨 태그로 a 태그를 말함
      }}>{t.title}</a></li>) 
  }
  return <nav>
  <ol>
    {lis}
  </ol>
</nav>
}


  
function Article(props) {
  return  <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}

function App() {
  //const _mode = useState('WELCOME');
  //const mode = _mode[0];
  //const setMOde = _mode[1];
  const [mode, setMode] = useState('WELCOME');

  const topics = [
    {id:1, title:`html`, body:'html is ...'},
    {id:2, title:`css`, body:'css is ...'},  
    {id:3, title:`javascript`, body:'javascript is ...'}
  ]
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if(mode === 'READ'){
    content = <Article title="Read" body="Hello, READ"></Article>
  }

  return (
    <div >
      {/* <Header title="WEB" onChangeMode={function(){ */}
      <Header title="WEB" onChangeMode={()=>{  //어로우펑션으로 간결 =>
        alert('header');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        // let name = prompt("ID Number? "+id, "");
        alert(id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
