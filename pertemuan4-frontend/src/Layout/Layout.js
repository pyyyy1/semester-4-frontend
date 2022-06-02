import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Layout(props){
    return (
        <div>
            <main>
            <Navbar/>
                <Container>
                    {props.children}
                </Container>
            <Footer/>
            </main>
        </div>
    );
}

export default Layout;