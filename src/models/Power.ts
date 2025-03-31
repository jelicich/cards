import Energy from "@/models/Energy";

export default interface Power {
  energies: Array<Energy>;
  name: string;
  points: number;
  description?: string;
}