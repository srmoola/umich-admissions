import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { InputAdornment, Tooltip } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { useAtom } from "jotai";
import {
  actscore,
  classrank,
  courserigor,
  freshmangpa,
  gpa,
  juniorgpa,
  points,
  satscore,
  sophomoregpa,
} from "../features/jotai";
import { useEffect, useState, useRef } from "react";
import {
  handleGpaChange,
  handleGradesGPA,
  handleSatChange,
  handleActChange,
  handleClassRankChange,
  handleCourseRigorChange,
} from "../features/errors";

export default function AddressForm() {
  const [, setgpa] = useAtom(gpa);
  const [, setfreshmangpa] = useAtom(freshmangpa);
  const [, setsophomoregpa] = useAtom(sophomoregpa);
  const [, setjuniorgpa] = useAtom(juniorgpa);
  const [, setsatscore] = useAtom(satscore);
  const [, setclassrank] = useAtom(classrank);
  const [, setcourserigor] = useAtom(courserigor);
  const [, setpoints] = useAtom(points);
  const [, setACT] = useAtom(actscore);
  const [gradeinflation, setgradeinflation] = useState<boolean>(false);
  const [ibdiploma, setibdiploma] = useState<boolean>(false);
  const counterRef = useRef(0);
  const ibcounterRef = useRef(0);
  const [gpaError, setGpaError] = useState(false);
  const [gpaHelperText, setGpaHelperText] = useState("");

  const [freshmanGpaError, setFreshmanGpaError] = useState(false);
  const [freshmanGpaHelperText, setFreshmanGpaHelperText] = useState("");

  const [sophomoreGpaError, setSophomoreGpaError] = useState(false);
  const [sophomoreGpaHelperText, setSophomoreGpaHelperText] = useState("");

  const [juniorGpaError, setJuniorGpaError] = useState(false);
  const [juniorGpaHelperText, setJuniorGpaHelperText] = useState("");

  const [saterror, setsaterror] = useState(false);
  const [sathelpertext, setsathelpertext] = useState("");

  const [acterror, setacterror] = useState(false);
  const [acthelpertext, setacthelpertext] = useState("");

  const [classrankerror, setclassrankerror] = useState(false);
  const [crhelpertext, setcrhelpertext] = useState("");

  const [courserigorError, setcourserigorError] = useState<boolean>(false);
  const [courserigorHelperText, setcourserigorHelperText] =
    useState<string>("");

  useEffect(() => {
    if (gradeinflation) {
      counterRef.current = 1;
      setpoints((prev) => prev + 10);
    } else if (!gradeinflation && counterRef.current > 0) {
      setpoints((prev) => prev - 10);
    }
  }, [gradeinflation]);

  useEffect(() => {
    if (ibdiploma) {
      ibcounterRef.current = 1;
      setpoints((prev) => prev + 8);
    } else if (!ibdiploma && ibcounterRef.current > 0) {
      setpoints((prev) => prev - 8);
    }
  }, [ibdiploma]);

  const handleGpaChangeWrapper = (value: string) => {
    handleGpaChange(value, setgpa, setGpaError, setGpaHelperText);
  };

  const handleGradesGPAWrapper = (value: string, field: string) => {
    handleGradesGPA(
      value,
      field,
      setfreshmangpa,
      setFreshmanGpaError,
      setFreshmanGpaHelperText,
      setsophomoregpa,
      setSophomoreGpaError,
      setSophomoreGpaHelperText,
      setjuniorgpa,
      setJuniorGpaError,
      setJuniorGpaHelperText
    );
  };

  const handleSatChangeWrapper = (value: string) => {
    handleSatChange(value, setsaterror, setsathelpertext, setsatscore);
  };

  const handleActChangeWrapper = (value: string) => {
    handleActChange(value, setacterror, setacthelpertext, setACT);
  };

  const handleClassRankChangeWrapper = (value: string) => {
    handleClassRankChange(
      value,
      setclassrankerror,
      setcrhelpertext,
      setclassrank
    );
  };

  const handleCourseRigorChangeWrapper = (value: string) => {
    handleCourseRigorChange(
      value,
      setcourserigorError,
      setcourserigorHelperText,
      setcourserigor
    );
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Academic Factors
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="unweigtedgpa"
            name="unweigtedgpa"
            label="Cumulative Unweighted GPA"
            fullWidth
            autoComplete="none"
            variant="standard"
            placeholder="(A+, A, A-) all equal A, etc."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="UMich recalculates your high school GPA. Go to umich.uloop.com/gpa-calculator if you need your UMich GPA.">
                    <HelpIcon sx={{ cursor: "pointer" }} />
                  </Tooltip>
                </InputAdornment>
              ),
              inputProps: {
                step: "0.01",
                min: "0",
                max: "4",
                pattern: "^[0-4](\\.\\d{1,2})?$",
              },
            }}
            error={gpaError}
            helperText={gpaHelperText}
            onChange={(e) => handleGpaChangeWrapper(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="weightedgpa"
            name="weightedgpa"
            label="Weighted GPA (optional)"
            fullWidth
            autoComplete="none"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="freshman"
            name="freshman"
            label="Freshman Year Unweighted GPA"
            fullWidth
            autoComplete="none"
            variant="standard"
            error={freshmanGpaError}
            helperText={freshmanGpaHelperText}
            onChange={(e) => handleGradesGPAWrapper(e.target.value, "freshman")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="sophomoregpa"
            name="sophomoregpa"
            label="Sophomore Year Unweighted GPA"
            fullWidth
            autoComplete="none"
            variant="standard"
            error={sophomoreGpaError}
            helperText={sophomoreGpaHelperText}
            onChange={(e) =>
              handleGradesGPAWrapper(e.target.value, "sophomore")
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="juniorgpa"
            name="juniorgpa"
            label="Junior Year Unweighted GPA"
            fullWidth
            autoComplete="none"
            variant="standard"
            error={juniorGpaError}
            helperText={juniorGpaHelperText}
            onChange={(e) => handleGradesGPAWrapper(e.target.value, "junior")}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="sat"
            name="sat"
            label="SAT Score (optional)"
            fullWidth
            autoComplete="none"
            variant="standard"
            type="text"
            error={saterror}
            helperText={sathelpertext}
            onChange={(e) => handleSatChangeWrapper(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="act"
            name="act"
            label="ACT Score (optional)"
            fullWidth
            autoComplete="none"
            variant="standard"
            type="text"
            error={acterror}
            helperText={acthelpertext}
            onChange={(e) => handleActChangeWrapper(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="classrank"
            name="classrank"
            label="Class Rank"
            placeholder="Enter as fraction (i.e. 1/400)"
            fullWidth
            autoComplete="none"
            variant="standard"
            error={classrankerror}
            helperText={crhelpertext}
            onChange={(e) => handleClassRankChangeWrapper(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Check this box if your school has grade inflation (Important)"
            onChange={() => setgradeinflation(!gradeinflation)}
          />
          <Typography sx={{ mt: 2, fontSize: "12px" }}>
            * Grade inflation refers to where the average grades awarded to
            students increase over time, without a proportional increase in
            their actual learning or academic performance. In other words, it
            implies that students are receiving higher grades compared to
            previous years, potentially making it easier for them to achieve
            higher marks.
            <br />
            <br />
            *Example: Increasingly higher percentages of students receiving top
            grades (e.g., A or A+). For instance, if historically only a small
            percentage of students received an A grade, but over time, a
            significant portion of the student population starts receiving A
            grades, it suggests grade inflation.
          </Typography>
        </Grid>
      </Grid>
      <Typography sx={{ mt: 4 }} variant="h6" gutterBottom>
        Course Rigor
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="courserigor"
            name="courserigor"
            label="Total # of AP/IB/Dual Enrollment Classes before Second Sem. Senior Year"
            fullWidth
            autoComplete="none"
            variant="standard"
            placeholder="(total courses taken) / (APs offered)"
            type="text"
            error={courserigorError}
            helperText={courserigorHelperText}
            onChange={(e) => handleCourseRigorChangeWrapper(e.target.value)}
            defaultValue={"/15"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Most colleges, including UMich takes into account how many rigorous courses are given at your school, so this calculator will also consider it">
                    <HelpIcon sx={{ cursor: "pointer" }} />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="IB Diploma Candidate"
            onChange={() => setibdiploma(!ibdiploma)}
          />
        </Grid>
      </Grid>
    </>
  );
}
