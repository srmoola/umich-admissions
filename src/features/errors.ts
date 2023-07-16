const regex = /^(?:[0-3](?:\.\d{1,2})?|4(?:\.0{1,2})?)$/;

export const handleGpaChange = (
  value: string,
  setgpa: Function,
  setGpaError: Function,
  setGpaHelperText: Function
) => {
  if (regex.test(value)) {
    setgpa(Number(value));
    setGpaError(false);
    setGpaHelperText("");
  } else {
    setGpaError(true);
    setGpaHelperText("Please enter a valid GPA between 0.00 and 4.00");
  }
};

export const handleGradesGPA = (
  value: string,
  field: string,
  setfreshmangpa: Function,
  setFreshmanGpaError: Function,
  setFreshmanGpaHelperText: Function,
  setsophomoregpa: Function,
  setSophomoreGpaError: Function,
  setSophomoreGpaHelperText: Function,
  setjuniorgpa: Function,
  setJuniorGpaError: Function,
  setJuniorGpaHelperText: Function
) => {
  switch (field) {
    case "freshman":
      if (regex.test(value)) {
        setfreshmangpa(Number(value));
        setFreshmanGpaError(false);
        setFreshmanGpaHelperText("");
      } else {
        setFreshmanGpaError(true);
        setFreshmanGpaHelperText(
          "Please enter a valid GPA between 0.00 and 4.00"
        );
      }
      break;
    case "sophomore":
      if (regex.test(value)) {
        setsophomoregpa(Number(value));
        setSophomoreGpaError(false);
        setSophomoreGpaHelperText("");
      } else {
        setSophomoreGpaError(true);
        setSophomoreGpaHelperText(
          "Please enter a valid GPA between 0.00 and 4.00"
        );
      }
      break;
    case "junior":
      if (regex.test(value)) {
        setjuniorgpa(Number(value));
        setJuniorGpaError(false);
        setJuniorGpaHelperText("");
      } else {
        setJuniorGpaError(true);
        setJuniorGpaHelperText(
          "Please enter a valid GPA between 0.00 and 4.00"
        );
      }
      break;
    default:
      break;
  }
};

export const handleSatChange = (
  value: string,
  setsaterror: Function,
  setsathelpertext: Function,
  setsatscore: Function
) => {
  const numvalue: number = Number(value);

  if (numvalue > 1600 || numvalue < 400) {
    setsaterror(true);
    setsathelpertext("Please enter a valid SAT Score");
    setsatscore(numvalue);
  } else {
    setsaterror(false);
    setsathelpertext("");
  }
};

export const handleActChange = (
  value: string,
  setacterror: Function,
  setacthelpertext: Function,
  setACT: Function
) => {
  const numvalue: number = Number(value);

  if (numvalue > 36 || numvalue < 1) {
    setacterror(true);
    setacthelpertext("Please enter a valid ACT Score");
  } else {
    setACT(numvalue);
    setacterror(false);
    setacthelpertext("");
  }
};

export const handleClassRankChange = (
  value: string,
  setclassrankerror: Function,
  setcrhelpertext: Function,
  setclassrank: Function
) => {
  if (!value.includes("/")) {
    setclassrankerror(true);
    setcrhelpertext("Please enter a valid class rank");
  } else {
    const parts = value.split("/");
    const numerator = parseInt(parts[0], 10);
    const denominator = parseInt(parts[1], 10);

    if (isNaN(numerator) || isNaN(denominator)) {
      setclassrankerror(true);
      setcrhelpertext("Please enter a valid class rank");
    } else {
      const classpercent: number = Math.floor((numerator / denominator) * 100);
      setclassrank(classpercent);
      setclassrankerror(false);
      setcrhelpertext("");
    }
  }
};

export const handleCourseRigorChange = (
  value: string,
  setcourserigorError: Function,
  setcourserigorHelperText: Function,
  setcourserigor: Function
) => {
  if (!value.includes("/")) {
    setcourserigorError(true);
    setcourserigorHelperText(
      "Please enter (courses taken) / (courses offered). If you don't know the amount of APs your school offers use the default value of 15"
    );
    return;
  }

  const parts = value.split("/");
  const numerator: number = parseInt(parts[0].trim(), 10);
  const denominator: number = parseInt(parts[1].trim(), 10);

  if (isNaN(numerator) || isNaN(denominator)) {
    setcourserigorError(true);
    setcourserigorHelperText(
      "Please enter (courses taken) / (courses offered). If you don't know the amount of APs your school offers use the default value of 15"
    );
    return;
  }

  if (isNaN(numerator / denominator)) {
    setcourserigor(0);
    setcourserigorError(false);
    setcourserigorHelperText("");
    return;
  }

  if (numerator > denominator) {
    setcourserigorError(true);
    setcourserigorHelperText("This does not make sense.");
    return;
  }

  if (numerator > 24) {
    setcourserigorError(true);
    setcourserigorHelperText("You did not take that many classes.");
    return;
  }

  const classpercent: number = Math.floor((numerator / denominator) * 100);

  setcourserigor(classpercent);
  setcourserigorError(false);
  setcourserigorHelperText("");
};
