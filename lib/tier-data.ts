export interface Tier {
    id: number;
    name: string;
    condition: string; // Sell/Buy Ratio condition
    status: string; // Descriptive status
    taxes: {
      buy: number; // Percentage
      sell: number; // Percentage
    };
    distribution: {
      buy: { reflection: number; liquidity: number; marketing: number }; // Percentages
      sell: { reflection: number; liquidity: number; marketing: number }; // Percentages
    };
  }
  
  export const tierData: Tier[] = [
    {
      id: 1,
      name: "Accumulation",
      condition: "Sell/Buy Ratio < 0.8",
      status: "Normal market activity, buying pressure dominant.",
      taxes: { buy: 4, sell: 6 },
      distribution: {
        buy: { reflection: 2.0, liquidity: 1.0, marketing: 1.0 },
        sell: { reflection: 3.0, liquidity: 2.0, marketing: 1.0 }
      }
    },
    {
      id: 2,
      name: "Equilibrium",
      condition: "Sell/Buy Ratio 0.8 - 1.2",
      status: "Balanced market forces, stable conditions.",
      taxes: { buy: 5, sell: 7 },
      distribution: {
        buy: { reflection: 2.0, liquidity: 2.0, marketing: 1.0 },
        sell: { reflection: 4.0, liquidity: 2.0, marketing: 1.0 }
      }
    },
    {
      id: 3,
      name: "Pressure",
      condition: "Sell/Buy Ratio 1.2 - 2.0",
      status: "Moderate selling pressure detected, early defenses activating.",
      taxes: { buy: 4, sell: 9 },
      distribution: {
        buy: { reflection: 2.0, liquidity: 1.0, marketing: 1.0 },
        sell: { reflection: 6.0, liquidity: 2.0, marketing: 1.0 }
      }
    },
    {
      id: 4,
      name: "Defense",
      condition: "Sell/Buy Ratio 2.0 - 3.0",
      status: "Significant selling pressure, stronger holder protection engaged.",
      taxes: { buy: 3, sell: 12 },
      distribution: {
        buy: { reflection: 1.0, liquidity: 1.0, marketing: 1.0 },
        sell: { reflection: 8.0, liquidity: 2.0, marketing: 2.0 }
      }
    },
    {
      id: 5,
      name: "Recovery",
      condition: "Sell/Buy Ratio > 3.0",
      status: "Extreme selling pressure, maximum antifragile response active.",
      taxes: { buy: 2, sell: 15 },
      distribution: {
        buy: { reflection: 1.0, liquidity: 0.5, marketing: 0.5 },
        sell: { reflection: 10.0, liquidity: 3.0, marketing: 2.0 }
      }
    }
  ];