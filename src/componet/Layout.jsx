import Navbar from './Navbar';
import Footer from './Footer';
import './layout.css'
import Step1 from './Step1'
import Step2 from './Step2'
const Layout = props => {
  return (
    <div className="layout">
      <Navbar></Navbar>
     {props.children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;