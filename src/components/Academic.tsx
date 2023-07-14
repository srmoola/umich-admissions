import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { InputAdornment, Tooltip } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { useAtom } from "jotai";
import {
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

export default function AddressForm() {
  const [, setgpa] = useAtom(gpa);
  const [, setfreshmangpa] = useAtom(freshmangpa);
  const [, setsophomoregpa] = useAtom(sophomoregpa);
  const [, setjuniorgpa] = useAtom(juniorgpa);
  const [, setsatscore] = useAtom(satscore);
  const [, setclassrank] = useAtom(classrank);
  const [, setcourserigor] = useAtom(courserigor);
  const [pointss, setpoints] = useAtom(points);
  const [gradeinflation, setgradeinflation] = useState<boolean>(false);
  const [ibdiploma, setibdiploma] = useState<boolean>(false);
  const counterRef = useRef(0);
  const ibcounterRef = useRef(0);
  console.log(pointss);

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

  //   let items: any[] = [gpas, freshgpa, sophgpa, junigpa, sat, cr, courser];
  //   console.log(items);

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
            label="Unweighted GPA"
            fullWidth
            autoComplete="none"
            variant="standard"
            placeholder="(A+, A, A-) all equal A"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="UMich recalculates your highschool GPA. Go to umich.uloop.com/gpa-calculator if you need your UMich GPA.">
                    <HelpIcon sx={{ cursor: "pointer" }} />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
            onChange={(e) => setgpa(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="weightedgpa"
            name="weightedgpa"
            label="Weighted GPA"
            fullWidth
            autoComplete="family-name"
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
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) => setfreshmangpa(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="sophomoregpa"
            name="sophomoregpa"
            label="Sophomore Year Unweighted GPA"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) => setsophomoregpa(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="juniorgpa"
            name="juniorgpa"
            label="Junior Year Unweighted GPA"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) => setjuniorgpa(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="sat"
            name="sat"
            label="SAT Score"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            type="number"
            onChange={(e) => setsatscore(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="act"
            name="act"
            label="ACT Score (optional)"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
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
            autoComplete="shipping country"
            variant="standard"
            onChange={(e) => setclassrank(e.target.value)}
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
            label="Total # of AP/IB/Dual Enrollment Classes before senior year"
            fullWidth
            autoComplete="none"
            variant="standard"
            placeholder="Total # of AP/IB/Dual Enrollment Classes"
            type="number"
            onChange={(e) => setcourserigor(Number(e.target.value))}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="UMich recalculates your highschool GPA. Go to umich.uloop.com/gpa-calculator if you need your UMich GPA.">
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
