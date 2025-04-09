import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/NavBar.css";

export function NavDropdown({ title, items, icon }) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}        >
            <span className="nav-link">{icon} {title} ▾</span>
            {open && (
                <ul className="dropdown">
                    {items.map((item, idx) => (
                        <li key={idx}>
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}
