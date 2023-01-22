export default function Header() {
    return (
        <header id="header" className="item1">
            <a href="/" id="logo">
            
                <img src="./img/git.png" alt="ícone do git" id="g"/>
                <img src="./img/github.png" alt="ícone do github" id="g"/>
                Eudis Alves
            </a>
            
            <nav id="nav">
                <button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
                    <span id="hamburger"></span>
                </button>
                <ul id="menu" role="menu">
                    <li><a href="/">Sobre</a></li>
                    <li><a href="./pages/gallery.html">Galeria</a></li>
                    <li><a href="https://github.com/EudisAlves">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/eudis-alves-342744179">Linkedin</a></li>
                </ul>
            </nav>
      </header>
    );
}