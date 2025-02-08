import { useState } from "react";
import "./style.css";
import { ParagraphProps } from "../../types/paragraph";
import { Button } from "../Button";

interface DraftEditorProps {
    addParagraph: (draft: ParagraphProps) => void;
}

export const DraftEditor = ({ addParagraph }: DraftEditorProps) => {
    const [draft, setDraft] = useState<string>("");

    return (
        <div className="container-editor">
            <textarea
                className="editor"
                placeholder="Escreva o rascunho da sua redação"
                defaultValue={draft}
                onChange={(e) => setDraft(e.target.value)}
            />
            {/* <button className="button" onClick={() => addParagraph({ id: Math.random(), content: draft })}>
                Adicionar paragrafo
            </button> */}
            <Button onClick={() => addParagraph({ id: Math.random(), content: draft })}>
                Adicionar parágrafo
            </Button>
        </div>
    );
}