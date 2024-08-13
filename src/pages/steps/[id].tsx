import React from "react";
import { useRouter } from "next/router";

const Steps = () => {
  const router = useRouter();
  const { id } = router.query; // 'id' matches the file name

  return (
    <div>
      {step == 0 ? <ZeroState /> : <DisplayContent step={step} />}
      {/* {setTimeout} */}
      <div>
        Hey
        <br /> Founder
      </div>
      <div>{Icon}</div>
    </div>
  );
};

export default Steps;
