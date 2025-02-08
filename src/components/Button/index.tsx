import './styles.css';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
}

const Button = ({ isLoading, children, onClick, ...rest }: ButtonProps) => {
    return (
        <button className="button" onClick={onClick} {...rest}>
            {isLoading ?
                "Carregando..."
                : children
            }
        </button>
    );
}

const ButtonIcon = ({ children }: { children: React.ReactNode }) => {
    return children;
}

Button.Icon = ButtonIcon;

export { Button }

