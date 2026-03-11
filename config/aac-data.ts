export type BlockSize = "9 Inch" | "6 Inch" | "4 Inch" | "3 Inch" | "2 Inch";

export interface BlockMetrics {
  dim: string;
  yield: number;
  rate: string;
  avg: string;
  depthScale: number; // Used for the Framer Motion 3D scaling
}

export const AAC_BLOCK_DATA: Record<BlockSize, BlockMetrics> = {
  "9 Inch": {
    dim: '24" x 8" x 9"',
    yield: 36,
    rate: "₹110-120",
    avg: "₹4150",
    depthScale: 0.9,
  },
  "6 Inch": {
    dim: '24" x 8" x 6"',
    yield: 54,
    rate: "₹75-85",
    avg: "₹4400",
    depthScale: 0.6,
  },
  "4 Inch": {
    dim: '24" x 8" x 4"',
    yield: 81,
    rate: "₹50-60",
    avg: "₹4500",
    depthScale: 0.4,
  },
  "3 Inch": {
    dim: '24" x 8" x 3"',
    yield: 108,
    rate: "On Request",
    avg: "On Request",
    depthScale: 0.3,
  },
  "2 Inch": {
    dim: '24" x 8" x 2"',
    yield: 162,
    rate: "On Request",
    avg: "On Request",
    depthScale: 0.2,
  },
};

// Exported so components can map over sizes dynamically without hardcoding
export const AVAILABLE_SIZES = Object.keys(AAC_BLOCK_DATA) as BlockSize[];
