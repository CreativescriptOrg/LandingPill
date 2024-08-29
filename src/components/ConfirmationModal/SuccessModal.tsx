import Image from "next/image";
import styles from "./styles.module.css";
import { Dialog } from "@mui/material";
import Cross from "./Cross";
const SuccessModal = ({
  subtitle,
  open,
  setOpen,
}: {
  subtitle: string;
  open: any;
  setOpen: any;
}) => {
  return (
    <Dialog
      onClose={() => {
        setOpen(false);
      }}
      open={open}
      maxWidth="lg"
      PaperProps={{
        style: {
          overflow: "visible",
        },
      }}
    >
      <div className={styles.container} style={{ position: "relative" }}>
        <div
          onClick={() => setOpen(false)}
          style={{
            width: "40px",
            height: "40px",
            background: "#000",
            borderRadius: "50%",
            position: "absolute",
            top: "12px",
            right: "12px",
            zIndex: "100",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Cross />
        </div>
        <div className={styles.subcontainer}>
          <Image src="/modalSubmittedBg.png" width={100} height={100} alt="" />
          <div>
            <h1 className={styles.title}>Thank You!</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <Image
              src="/modalSubmittedPill.png"
              width={220}
              height={220}
              alt=""
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SuccessModal;
