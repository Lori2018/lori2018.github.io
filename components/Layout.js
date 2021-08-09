import NavBar from './navbar.jsx'
import Footer from './footer.jsx'


export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <main>{children}</main>   
            {/* <Footer /> */}
        </>
    )
}