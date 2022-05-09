import { createContext, useState } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      vehicle: `Vehicle 1`,
      vehicleData: [
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
      ],
    },
    {
      id: 2,
      vehicle: `Vehicle 2`,
      vehicleData: [
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `55 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
      ],
    },
    {
      id: 3,
      vehicle: `Vehicle 3`,
      vehicleData: [
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `56 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
      ],
    },
    {
      id: 4,
      vehicle: `Vehicle 4`,
      vehicleData: [
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `57 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
      ],
    },
    {
      id: 5,
      vehicle: `Vehicle 5`,
      vehicleData: [
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `58 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
      ],
    },
    {
      id: 6,
      vehicle: `Vehicle 6`,
      vehicleData: [
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `59 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
      ],
    },
    {
      id: 7,
      vehicle: `Vehicle 7`,
      vehicleData: [
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `60 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
      ],
    },
    {
      id: 8,
      vehicle: `Vehicle 8`,
      vehicleData: [
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `61 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
      ],
    },
    {
      id: 9,
      vehicle: `Vehicle 9`,
      vehicleData: [
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `62 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
      ],
    },
    {
      id: 10,
      vehicle: `Vehicle 10`,
      vehicleData: [
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `63 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
        {
          startTime: `May 26, 5:18 pm `,
          duration: `24 min`,
          maxSpeed: `91 kmph`,
          averageSpeed: `54 kmph`,
          startingVoltage: `70.04V`,
          endingVoltage: `69.42V`,
          distance: `5.45 km`,
          driverScore: `98.5`,
        },
      ],
    },
  ]);
  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;