import { useAtom } from "jotai";
import {
  gpa,
  freshmangpa,
  sophomoregpa,
  juniorgpa,
  satscore,
  classrank,
  courserigor,
  points,
} from "../features/jotai";
import { gpaRanges } from "../features/ranges";
import { useEffect } from "react";

const ShowResults = () => {
  const [gpas] = useAtom(gpa);
  const [fresh] = useAtom(freshmangpa);
  const [soph] = useAtom(sophomoregpa);
  const [juni] = useAtom(juniorgpa);
  const [sat] = useAtom(satscore);
  const [classr] = useAtom(classrank);
  const [crig] = useAtom(courserigor);
  const [totalpoints, settotalpoints] = useAtom(points);

  useEffect(() => {
    let addPoints = 0;

    for (const range of gpaRanges) {
      if (range.range.length === 1 && gpas === range.range[0]) {
        addPoints = range.points / 2;
        break;
      } else if (gpas >= range.range[0] && gpas < range.range[1]) {
        addPoints = range.points / 2;
        break;
      }
    }
    settotalpoints((prev) => prev + addPoints);
  }, [gpas]);

  console.log(totalpoints);

  return <div>ShowResults</div>;
};

export default ShowResults;
