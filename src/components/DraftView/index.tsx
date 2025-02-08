import "./style.css"
import { Paragraph } from '../Paragraph';

import { ParagraphProps } from '../../types/paragraph';

interface DraftViewProps {
    paragraphs?: ParagraphProps[];
}

export const DraftView = ({ paragraphs }: DraftViewProps) => {
    return (
        <div className="container-draft">
            <p>Rascunho</p>
            {paragraphs?.map((paragraph) => (
                <Paragraph key={paragraph.id} id={paragraph.id} content={paragraph.content} />
            ))}
        </div>
    );
}
