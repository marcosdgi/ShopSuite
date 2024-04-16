import { useNavigate } from 'react-router-dom';

export const NavBar = ()=>{
    const navigate = useNavigate();
   

    return (
        <nav>
            <ul className="navBar">
                <li><button className="btnNav" onClick={()=>navigate('')}>Home</button></li>
                <li><button className="btnNav" onClick={()=>navigate('/products')}>Products</button></li>
                <li><button className="btnNav" onClick={()=>navigate('/about')}>About Us</button></li>
                <li><button className="btnNav" onClick={()=>navigate('/contact')}>Contact</button></li>
            </ul>
        </nav>
    )
}