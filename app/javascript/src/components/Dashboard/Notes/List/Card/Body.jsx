import React from "react";

import { Typography } from "neetoui";

const Body = ({ description }) => (
  <Typography className="text-gray-600" style="body2" weight="normal">
    {description}
  </Typography>
);

export default Body;
