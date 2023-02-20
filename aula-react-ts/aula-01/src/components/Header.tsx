import 'rbx/index.css'
import { Navbar } from 'rbx/components';




export default function Header() {
    return (
        <>  

            <section className="hero is-success">
                <div className="hero-body">
                    <p className="title">
                        Eudis Alves
                    </p>
                    <p className="subtitle">
                        React, Typescript e Bulma
                        <a className="navbar-item">
                        Home
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
}