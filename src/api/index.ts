export type Slot = {
  staff: number;
  start: string;
};

export type Service = {
  id: number;
  title: string;
};

export const services = [
  { id: 1, title: "Haircut" },
  { id: 2, title: "Haircut & Shave" },
  { id: 3, title: "Shave" }
];

export const staff = [{ id: 1, name: "Gino" }, { id: 2, name: "Carlos" }];

export const slots = [
  {
    staff: 1,
    start: "10:00"
  },
  {
    staff: 1,
    start: "11:00"
  },
  {
    staff: 1,
    start: "12:00"
  },
  {
    staff: 1,
    start: "13:00"
  },
  {
    staff: 2,
    start: "15:00"
  },
  {
    staff: 2,
    start: "10:00"
  },
  {
    staff: 2,
    start: "18:00"
  },
  {
    staff: 2,
    start: "19:00"
  }
];
