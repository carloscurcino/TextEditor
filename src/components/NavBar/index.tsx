import { FinalDraftProps } from "../../App";
import { Button } from "../Button";
import "./style.css"

interface NavBarProps {
    finalDrafts?: FinalDraftProps[];
    handleSave: () => void;
    isLoading?: boolean;
}

export const NavBar = ({ finalDrafts, handleSave, isLoading }: NavBarProps) => {
    return (
        <div className="navbar">
            <span>Rascunhos de redação: {finalDrafts?.length}</span>
            <Button onClick={handleSave} isLoading={isLoading}>Salvar</Button>
        </div>
    );
}