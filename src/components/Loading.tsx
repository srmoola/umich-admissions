import Avatar from "@mui/material/Avatar";
import Backdrop from "@mui/material/Backdrop";
import { motion } from "framer-motion";
import CalculateIcon from "@mui/icons-material/Calculate";

export default function Loading() {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#00274C",
      }}
      open={true}
    >
      <motion.div
        className="box"
        animate={{
          scale: [1, 2, 10],
          rotate: [0, 180, 180, 360],
          borderRadius: ["0%", "0%", "50%", "50%", "50%"],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 3],
        }}
      >
        <Avatar sx={{ backgroundColor: "#00274C" }}>
          <CalculateIcon sx={{ color: "#FFCB05" }} />
        </Avatar>
      </motion.div>
    </Backdrop>
  );
}
