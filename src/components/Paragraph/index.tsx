import { ParagraphProps } from "../../types/paragraph";
import "./style.css";

export const Paragraph = (paragraph: ParagraphProps) => {
    return (
        <div className="paragraph-container">
            <p className="text">{paragraph.content.length > 0 && paragraph.content}</p>
        </div>
    );
}