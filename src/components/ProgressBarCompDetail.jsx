import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// eslint-disable-next-line react/prop-types
export function ProgressBarCompDetail( {competenceNote} ) {
    function handleNote(note) {
        let value = 0;
        let pathColor = '#16a34a';
        let textColor = '#16a34a';

        switch (note) {
            case 'R':
                value = 100;
                break;
            case 'E':
                value = 75;
                break;
            case 'C':
                value = 50;
                pathColor = '#eab308';
                textColor = '#eab308';
                break;
            case 'D':
                value = 25;
                pathColor = '#eab308';
                textColor = '#eab308';
                break;
            case 'N':
                value = 0;
                pathColor = '#dc2626';
                textColor = '#dc2626';
                break;
            default:
                value = 0;
                break;
        }

        return { value, pathColor, textColor };
    }

    return (
        <>
            <CircularProgressbar
                value={handleNote(competenceNote).value}
                text={competenceNote}
                className="ml-5 !w-44 h-44 flex-shrink-0 rounded-full"
                styles={buildStyles({
                    pathColor: handleNote(competenceNote).pathColor,
                    textColor: handleNote(competenceNote).textColor,
                    textSize: "2rem",
                })}
            />
        </>
    )
}