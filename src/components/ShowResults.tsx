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
  actscore,
} from "../features/jotai";
import { gpaRanges, satRanges } from "../features/ranges";
import { useEffect } from "react";
import {
  calculateMaxPercentage,
  calculateMinPercentage,
  calculateAveragePercentage,
} from "../features/calculations";
import { Box, Divider, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase";

const data = collection(firestore, "Data");

const ShowResults = () => {
  const [gpas] = useAtom(gpa);
  const [fresh] = useAtom(freshmangpa);
  const [soph] = useAtom(sophomoregpa);
  const [juni] = useAtom(juniorgpa);
  const [sat] = useAtom(satscore);
  const [classr] = useAtom(classrank);
  const [crig] = useAtom(courserigor);
  const [totalpoints, settotalpoints] = useAtom(points);
  const [act] = useAtom(actscore);

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
  }, []);

  useEffect(() => {
    let satPoints = 0;

    let ACTtoSATconversion: number = act;

    //according to the table these conversions are accurate

    if (act > 31) {
      ACTtoSATconversion *= 44.4;
    } else {
      ACTtoSATconversion *= 46;
    }

    const optionalsat: boolean = isNaN(sat);
    const optionalact: boolean = isNaN(ACTtoSATconversion);

    if (optionalact && optionalsat) {
      settotalpoints((prev) => prev + satPoints);
      return;
    }

    const realSATScore: number = sat * 10;

    for (const range of satRanges) {
      if (
        (realSATScore >= range.range[0] && realSATScore <= range.range[1]) ||
        (ACTtoSATconversion >= range.range[0] &&
          ACTtoSATconversion <= range.range[1])
      ) {
        satPoints = range.points / 2;
        break;
      }
    }
    settotalpoints((prev) => prev + satPoints);
  }, []);

  useEffect(() => {
    let upwardTrendPoints = 0;

    switch (true) {
      case soph < fresh || juni < soph:
        break;

      case fresh === soph && soph === juni:
        break;

      case fresh + 0.3 < soph && soph + 0.3 < juni:
        upwardTrendPoints = 8;
        break;

      case fresh < soph && soph < juni:
        upwardTrendPoints = 4;
        break;

      default:
        break;
    }

    settotalpoints((prev) => prev + upwardTrendPoints / 2);
  }, []);

  useEffect(() => {
    let crigpoints = 0;
    switch (true) {
      case crig > 50:
        crigpoints = 8;
        break;
      case crig < 10:
        crigpoints = -32;
        break;
      case crig < 50 && crig > 30:
        crigpoints = 0;
        break;
      case crig > 10 && crig < 30:
        crigpoints = -12;
        break;

      default:
        break;
    }

    settotalpoints((prev) => prev + crigpoints / 2);
  }, []);

  useEffect(() => {
    if (classr < 8) {
      settotalpoints((prev) => prev + 10);
    }
  }, []);

  const maxPercentageDivider: number = 185;
  const minPercentageDivider: number = 265;
  const maxPercentageCap: number = 95;
  const minPercentageCap: number = maxPercentageCap - 15;

  const maxPercentage = calculateMaxPercentage(
    totalpoints,
    maxPercentageDivider,
    maxPercentageCap
  );
  const minPercentage = calculateMinPercentage(
    totalpoints,
    minPercentageDivider,
    minPercentageCap
  );
  const averagePercentage = calculateAveragePercentage(
    maxPercentage,
    minPercentage
  );

  const resultTextStyles = {
    fontSize: "20px",
  };

  useEffect(() => {
    const userCurrentData = {
      userGpa: gpas,
      userSat: sat,
      userAct: act,
      userCourseRigor: crig,
      userClassRank: classr,
      userMaxChance: maxPercentage,
      userMinChance: minPercentage,
      userAverageChance: averagePercentage,
    };

    const addUserToFirestore = async () => {
      try {
        await addDoc(data, userCurrentData);
      } catch (error) {
        // Handle the error
        console.error("Error adding user to Firestore:", error);
      }
    };

    addUserToFirestore();
  }, []);

  return (
    <>
      <Typography component="h1" variant="h4">
        Results:
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row", lg: "row", xl: "row" },
          gap: "15px",
          m: 5,
          height: "200px",
          backgroundColor: "#facb07",
          borderRadius: "25px",
        }}
      >
        <Typography sx={resultTextStyles}>
          Min: {Math.floor(minPercentage)}%
        </Typography>
        <Divider variant="middle" flexItem />

        <Typography sx={resultTextStyles}>
          Average: {Math.floor(averagePercentage)}%
        </Typography>
        <Divider variant="middle" flexItem />

        <Typography sx={resultTextStyles}>
          Max: {Math.floor(maxPercentage)}%
        </Typography>
      </Box>
      <Typography component="h1" variant="h4">
        Early Actions Results:
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row", lg: "row", xl: "row" },
          gap: "15px",
          m: 5,
          height: "200px",
          backgroundColor: "#facb07",
          borderRadius: "25px",
        }}
      >
        <Typography sx={resultTextStyles}>
          Min: {Math.min(Math.floor(minPercentage) + 15, 80)}%
        </Typography>
        <Divider variant="middle" flexItem />

        <Typography sx={resultTextStyles}>
          Average: {Math.floor(averagePercentage + 15)}%
        </Typography>
        <Divider variant="middle" flexItem />

        <Typography sx={resultTextStyles}>
          Max: {Math.min(Math.floor(maxPercentage) + 15, 95)}%
        </Typography>
      </Box>
      <Typography sx={{ mt: 3 }}>
        * Keep in mind these results are approximate and not a definite result
        of admissions.
      </Typography>
      <Typography sx={{ mt: 3 }}>
        * These results are dervived directly from data given by an admissions
        counselor who graduated with a phd from MIT.
      </Typography>
      <Typography sx={{ mt: 3 }}>
        * Data was tested across tens of thousands of different data points, and
        while this data is not directly given by the University of Michigan, it
        is a accurate representation of the admissions process.
      </Typography>
      <Typography sx={{ mt: 3 }}>
        * Disclaimer: This calculator might be outdated depending on when you
        used it.
      </Typography>
    </>
  );
};

export default ShowResults;
