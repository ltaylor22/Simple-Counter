import { withTimer } from "@/lib/withTimer";

export function SecondsCounter({ seconds }) {
   const secondsInString = seconds.toString();
   const paddedStart = secondsInString.padStart(6, "0");
   const digits = paddedStart.split("");

    
    return ( 
        <div className="row">
            {digits.map((digits, index) => {
            return (
                <div key={index} className="col text-xl" style={{ padding: 20, border: "solid 1px black"}} >
                    <h1>{digits}</h1>
                </div>
            );
            })}
        
        </div>
    
    );
};

export const SecondsCounterWithTimer = withTimer(SecondsCounter);
